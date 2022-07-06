import { javascript } from '@codemirror/lang-javascript';
import {
  faCircleExclamation,
  faClipboard,
  faClose,
  faDiceFive,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Overlay from '@layouts/Overlay';
import { dashboardState } from '@states';
import { iconStyle } from '@styles/customStyle';
import { dracula } from '@uiw/codemirror-theme-dracula';
import CodeMirror from '@uiw/react-codemirror';
import { useCallback, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { dummyMatcher } from 'src/utils/dummyMatcher';
import { InfoMessage, ModalBtnContainer, ResultModalWrapper } from './styles';
interface IProps {}

function ResultModal({}: IProps) {
  const [{ code }, setDashboardState] = useRecoilState(dashboardState);
  const [isDeletingOverlay, setIsDeletingOverlay] = useState(false);
  const [resultCode, setResultCode] = useState(dummyMatcher(code));
  const shuffleBtnRef = useRef<HTMLButtonElement>(null);

  const closeModal = useCallback(() => {
    setIsDeletingOverlay(true);
    setTimeout(() => {
      setDashboardState((prev) => ({
        ...prev,
        onResultModal: false,
      }));
      setIsDeletingOverlay(false);
    }, 180);
  }, []);

  const onClickShuffle = useCallback(() => {
    setResultCode(dummyMatcher(code));
    if (
      shuffleBtnRef?.current &&
      shuffleBtnRef?.current?.className !== 'dicing'
    ) {
      shuffleBtnRef.current!.classList.add('dicing');
      setTimeout(() => {
        shuffleBtnRef.current!.classList.remove('dicing');
      }, 600);
    }
  }, []);

  return (
    <>
      <Overlay
        isDeletingOverlay={isDeletingOverlay}
        close={closeModal}
        zIndex={950}
      />
      <ResultModalWrapper
        style={{
          animation: isDeletingOverlay
            ? 'fade-down 0.4s cubic-bezier(0,.99,.54,.98) forwards'
            : 'fade-up 0.4s cubic-bezier(0,.99,.54,.98) forwards',
        }}
        data-testid="modal"
      >
        <CodeMirror
          value={resultCode}
          height="100%"
          readOnly={true}
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
          <button ref={shuffleBtnRef} onClick={onClickShuffle}>
            다시 섞기
            <FontAwesomeIcon style={iconStyle('18px')} icon={faDiceFive} />
          </button>
          <button onClick={closeModal}>
            닫기
            <FontAwesomeIcon style={iconStyle('18px')} icon={faClose} />
          </button>
        </ModalBtnContainer>
      </ResultModalWrapper>
    </>
  );
}

export default ResultModal;
