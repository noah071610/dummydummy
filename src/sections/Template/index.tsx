import { javascript } from '@codemirror/lang-javascript';
import { faClipboard, faDiceFive } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  styled as muiStyled,
  Tooltip as MuiTooltip,
  tooltipClasses,
  TooltipProps,
} from '@mui/material';
import { templateNames } from '@resource/templates';
import { curPageState, templateState } from '@states';
import { iconStyle } from '@styles/customStyle';
import { dracula } from '@uiw/codemirror-theme-dracula';
import CodeMirror from '@uiw/react-codemirror';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { dummyMatcher } from 'src/utils/dummyMatcher';
import {
  TemplateCode,
  TemplateIconButton,
  TemplateResult,
  TemplateSectionWrapper,
} from './styles';
interface IProps {}

function TemplateSection({}: IProps) {
  const curPage = useRecoilValue(curPageState);
  const curTemplateName = useMemo(
    () => (curPage.includes('template-') ? curPage.split('-')[1] : 'user'),
    [curPage]
  );
  const { templates } = useRecoilValue(templateState);
  const [resultCode, setResultCode] = useState('');
  const shuffleBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setResultCode(dummyMatcher(templates[curTemplateName]));
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
    setResultCode(dummyMatcher(templates[curTemplateName]));
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

  return (
    <TemplateSectionWrapper>
      <TemplateCode>
        <h2>
          <div className="dot" />
          <span>{templateNames[curTemplateName]} 양식 📚</span>
        </h2>
        <CodeMirror
          value={
            curPage.includes('template')
              ? templates[curTemplateName]
              : templates['user']
          }
          height="300px"
          readOnly={true}
          theme={dracula}
          extensions={[javascript({ jsx: true })]}
        />
        <BootstrapTooltip title="대시보드로 복사" placement="top" arrow>
          <TemplateIconButton className="copy">
            <FontAwesomeIcon style={iconStyle('18px')} icon={faClipboard} />
          </TemplateIconButton>
        </BootstrapTooltip>
      </TemplateCode>
      <TemplateResult>
        <h2>
          <div className="dot" />
          <span>결과 미리보기 🎊</span>
        </h2>
        <CodeMirror
          value={dummyMatcher(resultCode)}
          readOnly={true}
          height="300px"
          theme={dracula}
          extensions={[javascript({ jsx: true })]}
        />
        <BootstrapTooltip title="섞기" placement="top" arrow>
          <TemplateIconButton
            ref={shuffleBtnRef}
            onClick={onClickShuffle}
            className="shuffle"
          >
            <FontAwesomeIcon style={iconStyle('18px')} icon={faDiceFive} />
          </TemplateIconButton>
        </BootstrapTooltip>
      </TemplateResult>
    </TemplateSectionWrapper>
  );
}

export default TemplateSection;
