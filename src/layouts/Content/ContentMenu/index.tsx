import {
  faArrowRotateLeft,
  faCircleExclamation,
  faGear,
  faList,
  faPenToSquare,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from '@layouts/Modal';
import {
  styled as muiStyled,
  Tooltip as MuiTooltip,
  tooltipClasses,
  TooltipProps,
} from '@mui/material';
import { iconStyle } from '@styles/customStyle';
import { useCallback, useState } from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';
import {
  ContentMenuContainer,
  InfoMessage,
  MenuIconButton,
  ModalBtnContainer,
} from './styles';
interface IProps {}

const menuList = [
  { label: '초기화', value: 'reset', icon: faArrowRotateLeft },
  { label: '트리거', value: 'trigger', icon: faList },
  { label: '설정', value: 'setting', icon: faGear },
  { label: '결과보기', value: 'result', icon: faPenToSquare },
];

function ContentMenu({}: IProps) {
  const [onResultModal, setOnResultModal] = useState(false);
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
        <Modal setOnModal={setOnResultModal}>
          <CopyBlock
            language={'javascript'}
            text={`console.log('dd')`}
            showLineNumbers={false}
            theme={dracula}
            wrapLines={true}
            codeBlock
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
            <button>복사 하기</button>
            <button>다시 섞기</button>
            <button>종료</button>
          </ModalBtnContainer>
        </Modal>
      )}
    </ContentMenuContainer>
  );
}

export default ContentMenu;
