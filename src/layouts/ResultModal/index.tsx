import { javascript } from '@codemirror/lang-javascript';
import { json } from '@codemirror/lang-json';
import { BootstrapTooltip } from '@components/BootstrapTooltip';
import {
  faClipboard,
  faClose,
  faDiceFive,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Overlay from '@layouts/Overlay';
import { curPageState, dashboardState } from '@states';
import { iconStyle } from '@styles/customStyle';
import { dracula } from '@uiw/codemirror-theme-dracula';
import CodeMirror from '@uiw/react-codemirror';
import { useCallback, useRef, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useRecoilState, useRecoilValue } from 'recoil';
import { dummyMatcher } from 'src/utils/dummyMatcher';
import {
  MenuIconButton,
  ResultMenuContainer,
  ResultModalWrapper,
} from './styles';
interface IProps {}

const menuList = [
  { label: '복사하기', value: 'copy', icon: faClipboard },
  { label: '다시섞기', value: 'shuffle', icon: faDiceFive },
  { label: '닫기', value: 'close', icon: faClose },
];

function ResultModal({}: IProps) {
  const curPage = useRecoilValue(curPageState);
  const [{ javascriptCode, jsonCode }, setDashboardState] =
    useRecoilState(dashboardState);
  const [isDeletingOverlay, setIsDeletingOverlay] = useState(false);
  const [resultCode, setResultCode] = useState(
    dummyMatcher(curPage.includes('javascript') ? javascriptCode : jsonCode)
  );
  const shuffleBtnRef = useRef<HTMLButtonElement>(null);

  // useEffect(() => {
  //   setResultCode(
  //     dummyMatcher(curPage.includes('javascript') ? javascriptCode : jsonCode)
  //   );
  // }, [curPage]);

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

  const onClickMenuBtn = useCallback(
    (value: string) => {
      switch (value) {
        case 'copy':
          break;
        case 'shuffle':
          setResultCode(
            dummyMatcher(
              curPage.includes('javascript') ? javascriptCode : jsonCode
            )
          );
          if (
            shuffleBtnRef?.current &&
            shuffleBtnRef?.current?.className !== 'dicing'
          ) {
            shuffleBtnRef.current!.classList.add('dicing');
            setTimeout(() => {
              shuffleBtnRef.current!.classList.remove('dicing');
            }, 600);
          }
          break;
        case 'close':
          closeModal();
          break;
      }
    },
    [curPage, javascriptCode, jsonCode, shuffleBtnRef]
  );

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
        <h2>결괏값 확인 💮</h2>
        <CodeMirror
          value={resultCode}
          height="695px"
          readOnly={true}
          theme={dracula}
          extensions={[
            curPage.includes('json') ? json() : javascript({ jsx: true }),
          ]}
        />
        <ResultMenuContainer>
          {menuList.map((menu, i) => (
            <BootstrapTooltip
              key={`menu-icon-${i}`}
              title={menu.label}
              placement="top"
              arrow
            >
              {menu.value === 'copy' ? (
                <CopyToClipboard text={resultCode}>
                  <MenuIconButton
                    className={menu.value}
                    onClick={() => onClickMenuBtn(menu.value)}
                  >
                    <FontAwesomeIcon
                      style={iconStyle('18px')}
                      icon={menu.icon}
                    />
                  </MenuIconButton>
                </CopyToClipboard>
              ) : (
                <MenuIconButton
                  className={menu.value}
                  ref={menu.value === 'shuffle' ? shuffleBtnRef : undefined}
                  onClick={() => onClickMenuBtn(menu.value)}
                >
                  <FontAwesomeIcon style={iconStyle('18px')} icon={menu.icon} />
                </MenuIconButton>
              )}
            </BootstrapTooltip>
          ))}
        </ResultMenuContainer>
      </ResultModalWrapper>
    </>
  );
}

export default ResultModal;
