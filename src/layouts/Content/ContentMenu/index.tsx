import { javascript } from '@codemirror/lang-javascript';
import {
  faArrowRotateLeft,
  faCircleExclamation,
  faClipboard,
  faClose,
  faDiceFive,
  faGear,
  faList,
  faPenToSquare,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { accountNumberGenerator } from '@generator/accountNumberGenerator';
import { addressGenerator } from '@generator/addressGenerator';
import { creditCardNumberGenerator } from '@generator/creditCardNumberGenerator';
import Modal from '@layouts/Modal';
import {
  styled as muiStyled,
  Tooltip as MuiTooltip,
  tooltipClasses,
  TooltipProps,
} from '@mui/material';
import { iconStyle } from '@styles/customStyle';
import { dracula } from '@uiw/codemirror-theme-dracula';
import CodeMirror from '@uiw/react-codemirror';
import { useCallback, useEffect, useState } from 'react';
import { banks, creditCardCompanies } from 'src/resource/account';
import { regions } from 'src/resource/address';
import { firstNames } from 'src/resource/firstNames';
import { lastNames } from 'src/resource/lastNames';
import { occupations } from 'src/resource/occupations';
import {
  ContentMenuContainer,
  InfoMessage,
  MenuIconButton,
  ModalBtnContainer,
} from './styles';
interface IProps {
  contentCode: string;
}

const menuList = [
  { label: '초기화', value: 'reset', icon: faArrowRotateLeft },
  { label: '트리거', value: 'trigger', icon: faList },
  { label: '설정', value: 'setting', icon: faGear },
  { label: '결과보기', value: 'result', icon: faPenToSquare },
];

const matcherList: {
  key: string;
  list?: any[];
  generator?: () => string;
  type: 'pick' | 'generate' | null;
}[] = [
  { key: '$firstName', list: firstNames, type: 'pick' },
  { key: '$lastName', list: lastNames, type: 'pick' },
  { key: '$address', generator: addressGenerator, type: 'generate' },
  { key: '$region', list: regions, type: 'pick' },
  { key: '$bank', list: banks, type: 'pick' },
  { key: '$creditCardCompany', list: creditCardCompanies, type: 'pick' },
  { key: '$occupation', list: occupations, type: 'pick' },
  {
    key: '$accountNumber',
    generator: accountNumberGenerator,
    type: 'generate',
  },
  {
    key: '$creditCardNumber',
    generator: creditCardNumberGenerator,
    type: 'generate',
  },
];

function matcher(origin: string) {
  for (let i = 0; i < matcherList.length; i++) {
    const item = matcherList[i];
    const regExp = new RegExp(`\\${item.key}`, 'g');
    if (origin.match(regExp)) {
      if (item.type === 'pick' && item?.list) {
        origin = origin.replace(
          item.key,
          `"${item.list[Math.floor(Math.random() * item.list.length)]}"`
        );
      }
      if (item.type === 'generate' && item?.generator) {
        origin = origin.replace(item.key, `"${item.generator()}"`);
      }
    }
  }

  return origin;
}

var commentRegExp = new RegExp('//.*\n', 'gm');

function ContentMenu({ contentCode }: IProps) {
  const [onResultModal, setOnResultModal] = useState(false);
  const [resultCode, setResultCode] = useState('');
  const [isDeletingOverlay, setIsDeletingOverlay] = useState(false);
  const closeModal = useCallback(() => {
    setIsDeletingOverlay(true);
    setTimeout(() => {
      setOnResultModal((prev: boolean) => !prev);
      setIsDeletingOverlay(false);
    }, 180);
  }, []);

  const BootstrapTooltip = muiStyled(
    ({ className, ...props }: TooltipProps) => (
      <MuiTooltip {...props} classes={{ popper: className }} />
    )
  )(() => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: 'rgba(255,255,255,0.8)',
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: 'rgba(255,255,255,0.8)',
      padding: '10px 16px',
      color: 'black',
    },
  }));

  useEffect(() => {
    if (onResultModal) {
      setResultCode(matcher(contentCode.replace(commentRegExp, '')));
    }
  }, [contentCode, onResultModal]);

  const onClickShuffle = useCallback(() => {
    setResultCode(matcher(contentCode.replace(commentRegExp, '')));
  }, [contentCode]);

  const onClickMenuBtn = useCallback((value: string) => {
    switch (value) {
      case 'result':
        setOnResultModal(true);
        break;
      case 'reset':
        break;
      case 'trigger':
        break;
      case 'setting':
        break;
    }
  }, []);

  return (
    <ContentMenuContainer>
      {menuList.map((menu, i) => (
        <BootstrapTooltip
          key={`content-menu-${i}`}
          title={menu.label}
          placement="top"
          arrow
        >
          <MenuIconButton
            onClick={() => onClickMenuBtn(menu.value)}
            isResult={menu.value === 'result'}
          >
            <FontAwesomeIcon style={iconStyle('18px')} icon={menu.icon} />
          </MenuIconButton>
        </BootstrapTooltip>
      ))}
      {onResultModal && (
        <Modal isDeletingOverlay={isDeletingOverlay} closeModal={closeModal}>
          <CodeMirror
            value={resultCode}
            height="100%"
            onChange={() => {}}
            theme={dracula}
            extensions={[javascript({ jsx: true })]}
          />
          <InfoMessage>
            <FontAwesomeIcon
              style={iconStyle('25px')}
              icon={faCircleExclamation}
            />
            <span>아웃풋의 설정을 바꾸시려면</span> <a href="/">여기</a>
            <span>를 클릭하세요!</span>
          </InfoMessage>
          <ModalBtnContainer>
            <button>
              복사 하기
              <FontAwesomeIcon style={iconStyle('18px')} icon={faClipboard} />
            </button>
            <button onClick={onClickShuffle}>
              다시 섞기
              <FontAwesomeIcon style={iconStyle('18px')} icon={faDiceFive} />
            </button>
            <button onClick={closeModal}>
              닫기
              <FontAwesomeIcon style={iconStyle('18px')} icon={faClose} />
            </button>
          </ModalBtnContainer>
        </Modal>
      )}
    </ContentMenuContainer>
  );
}

export default ContentMenu;
