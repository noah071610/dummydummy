import { javascript } from '@codemirror/lang-javascript';
import { json } from '@codemirror/lang-json';
import { faClipboard, faDiceFive } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RepeatIcon from '@mui/icons-material/Repeat';
import {
  styled as muiStyled,
  Tooltip as MuiTooltip,
  tooltipClasses,
  TooltipProps,
} from '@mui/material';
import { templateNames } from '@resource/templates';
import {
  curPageState,
  dashboardState,
  snackbarState,
  templateState,
} from '@states';
import { iconStyle } from '@styles/customStyle';
import { CodeBlockType } from '@typings';
import { dracula } from '@uiw/codemirror-theme-dracula';
import CodeMirror from '@uiw/react-codemirror';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { dummyMatcher } from 'src/utils/dummyMatcher';
import {
  CodeMenuIconContainer,
  TemplateCode,
  TemplateIconButton,
  TemplateResult,
  TemplateSectionInner,
  TemplateSectionWrapper,
} from './styles';

function TemplateSection() {
  const [curPage, setCurPageState] = useRecoilState(curPageState);
  const [templateCodeType, setTemplateCodeType] =
    useState<CodeBlockType>('json');
  const setDashboardState = useSetRecoilState(dashboardState);
  const setSnackbarState = useSetRecoilState(snackbarState);
  const curTemplateName = useMemo(
    () =>
      curPage.includes('template-')
        ? curPage.split('-')[1] + `-${templateCodeType}`
        : `user-${templateCodeType}`,
    [curPage, templateCodeType]
  );
  const { templates } = useRecoilValue(templateState);
  const [templateCode, setTemplateCode] = useState('');
  const shuffleBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setTemplateCode(dummyMatcher(templates[curTemplateName]));
  }, [templates, curTemplateName]);

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

  const onClickShuffle = useCallback(() => {
    setTemplateCode(dummyMatcher(templates[curTemplateName]));
    if (
      shuffleBtnRef?.current &&
      shuffleBtnRef?.current?.className !== 'dicing'
    ) {
      shuffleBtnRef.current!.classList.add('dicing');
      setTimeout(() => {
        shuffleBtnRef.current!.classList.remove('dicing');
      }, 600);
    }
  }, [curTemplateName, templates]);

  const onChangeTemplateCodeType = useCallback(() => {
    setTemplateCodeType((prev) =>
      prev === 'javascript' ? 'json' : 'javascript'
    );
  }, []);

  const onClickCopyTemplate = useCallback(() => {
    setCurPageState(`#dashboard-${templateCodeType}`);
    window.location.hash = `dashboard-${templateCodeType}`;
    if (templateCodeType === 'json') {
      setDashboardState((prev) => ({
        ...prev,
        jsonCode: templates[curTemplateName],
      }));
    } else {
      setDashboardState((prev) => ({
        ...prev,
        javascriptCode: templates[curTemplateName],
      }));
    }
    setSnackbarState({
      isOpen: true,
      message: '대시보드로 템플릿을 복사했습니다.',
    });
  }, [curTemplateName, templates, templateCodeType]);

  return (
    <TemplateSectionWrapper>
      <TemplateSectionInner>
        <TemplateCode>
          <h2>
            <div className="dot" />
            <span>{templateNames[curTemplateName]} 템플릿 📚</span>
          </h2>
          <CodeMirror
            value={
              curPage.includes('template')
                ? templates[curTemplateName]
                : templates['user-json']
            }
            readOnly={true}
            theme={dracula}
            extensions={[
              templateCodeType === 'json' ? json() : javascript({ jsx: true }),
            ]}
          />
          <CodeMenuIconContainer>
            <BootstrapTooltip
              title={`${
                templateCodeType === 'json' ? '자바스크립트로' : 'json으로'
              } 변환`}
              placement="top"
              arrow
            >
              <TemplateIconButton
                onClick={onChangeTemplateCodeType}
                className="exchange"
              >
                <RepeatIcon style={iconStyle('22px')} />
              </TemplateIconButton>
            </BootstrapTooltip>
            <BootstrapTooltip title="대시보드로 복사" placement="top" arrow>
              <TemplateIconButton
                onClick={onClickCopyTemplate}
                className="copy"
              >
                <FontAwesomeIcon style={iconStyle('18px')} icon={faClipboard} />
              </TemplateIconButton>
            </BootstrapTooltip>
          </CodeMenuIconContainer>
        </TemplateCode>
        <TemplateResult>
          <h2>
            <div className="dot" />
            <span>결과 미리보기 🎊</span>
          </h2>
          <CodeMirror
            value={dummyMatcher(templateCode)}
            readOnly={true}
            theme={dracula}
            extensions={[
              templateCodeType === 'json' ? json() : javascript({ jsx: true }),
            ]}
          />
          <CodeMenuIconContainer>
            <BootstrapTooltip title="섞기" placement="top" arrow>
              <TemplateIconButton
                ref={shuffleBtnRef}
                onClick={onClickShuffle}
                className="shuffle"
              >
                <FontAwesomeIcon style={iconStyle('18px')} icon={faDiceFive} />
              </TemplateIconButton>
            </BootstrapTooltip>
          </CodeMenuIconContainer>
        </TemplateResult>
      </TemplateSectionInner>
      <div className="dead-div" />
    </TemplateSectionWrapper>
  );
}

export default TemplateSection;
