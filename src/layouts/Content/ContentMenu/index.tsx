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
import { colorGenerator } from '@generator/colorGenerator';
import { creditCardNumberGenerator } from '@generator/creditCardNumberGenerator';
import { dateGenerator } from '@generator/dateGenerator';
import { emailGenerator } from '@generator/emailGenerator';
import { ipGenerator } from '@generator/ipGenerator';
import { linkGenerator } from '@generator/linkGenerator';
import { nameGenerator } from '@generator/nameGenerator';
import { numberRangeGenerator } from '@generator/numberRangeGenerator';
import { phoneNumberGenerator } from '@generator/phoneNumberGenerator';
import { postalCodeGenerator } from '@generator/postalCodeGenerator';
import { priceRangeGenerator } from '@generator/priceGenerator';
import { uuidGenerator } from '@generator/uuidGenerator';
import Modal from '@layouts/Modal';
import {
  styled as muiStyled,
  Tooltip as MuiTooltip,
  tooltipClasses,
  TooltipProps,
} from '@mui/material';
import { banks, creditCardCompanies } from '@resource/account';
import { cities } from '@resource/address';
import { companies } from '@resource/companies';
import { mobileCarrier } from '@resource/contact';
import { artists, dramas, foods, movies, musics } from '@resource/cultures';
import { iconStyle } from '@styles/customStyle';
import { dracula } from '@uiw/codemirror-theme-dracula';
import CodeMirror from '@uiw/react-codemirror';
import { useCallback, useEffect, useState } from 'react';
import {
  drinking,
  education,
  gender,
  habit,
  mbti,
  occupations,
  smoking,
  socialMedias,
  universities,
} from 'src/resource/profile';
import { stations } from 'src/resource/stations';
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
}[] = [
  { key: '$firstName', generator: () => nameGenerator('first') },
  { key: '$lastName', generator: () => nameGenerator('last') },
  { key: '$fullName', generator: () => nameGenerator('full') },
  { key: '$nameWithGender', generator: () => nameGenerator('withGender') },
  { key: '$address', generator: addressGenerator },
  { key: '$link', generator: linkGenerator },
  { key: '$city', list: cities },
  { key: '$bank', list: banks },
  { key: '$phoneNumber', generator: phoneNumberGenerator },
  { key: '$uuid', generator: uuidGenerator },
  { key: '$ip', generator: ipGenerator },
  { key: '$drama', list: dramas },
  { key: '$movie', list: movies },
  { key: '$music', list: musics },
  { key: '$company', list: companies },
  {
    key: '$height',
    generator: () => numberRangeGenerator('height', [150, 185]),
  },
  { key: '$age', generator: () => numberRangeGenerator('age', [15, 50]) },
  {
    key: '$number',
    generator: () => numberRangeGenerator('random', [0, 1000]),
  },
  { key: '$university', list: universities },
  { key: '$education', list: education },
  { key: '$station', list: stations },
  { key: '$email', generator: emailGenerator },
  {
    key: '$date',
    generator: () => dateGenerator('YYYYMMDD', []),
  },
  { key: '$artist', list: artists },
  { key: '$food', list: foods },
  { key: '$drinking', list: drinking },
  { key: '$gender', list: gender },
  { key: '$smoking', list: smoking },
  { key: '$socialMedia', list: socialMedias },
  { key: '$mbti', list: mbti },
  { key: '$creditCardCompany', list: creditCardCompanies },
  { key: '$occupation', list: occupations },
  { key: '$mobileCarrier', list: mobileCarrier },
  { key: '$color', generator: () => colorGenerator('hex') },
  {
    key: '$price',
    generator: () =>
      priceRangeGenerator([0, 50000], {
        gap: 1000,
        comma: true,
        suffix: '원',
      }),
  },
  { key: '$habit', list: habit },
  { key: '$postalCode', generator: postalCodeGenerator },
  {
    key: '$accountNumber',
    generator: accountNumberGenerator,
  },
  {
    key: '$creditCardNumber',
    generator: creditCardNumberGenerator,
  },
];

function matcher(origin: string) {
  for (let i = 0; i < matcherList.length; i++) {
    const item = matcherList[i];
    const regExp = new RegExp(`\\${item.key}`, 'g');
    if (origin.match(regExp)) {
      if (item?.list) {
        origin = origin.replace(
          item.key,
          `"${item.list[Math.floor(Math.random() * item.list.length)]}"`
        );
      }
      if (item?.generator) {
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
