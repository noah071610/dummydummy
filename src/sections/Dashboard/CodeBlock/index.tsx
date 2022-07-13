import { javascript } from '@codemirror/lang-javascript';
import { json } from '@codemirror/lang-json';
import { dashboardState, isChangedState } from '@states';
import { CodeBlockType } from '@typings';
import { dracula } from '@uiw/codemirror-theme-dracula';
import CodeMirror from '@uiw/react-codemirror';
import { memo, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import DashboardMenu from './DashboardMenu';
import { CodeBlockWrapper } from './styles';

interface IProps {
  type: CodeBlockType;
}

function CodeBlock({ type }: IProps) {
  const [{ javascriptCode, jsonCode }, setDashboardState] =
    useRecoilState(dashboardState);
  const [isChanged, setIsChanged] = useRecoilState(isChangedState);
  const onChangeDashboardCode = useCallback(
    (value: any) => {
      if (type === 'json') {
        setDashboardState((prev) => ({
          ...prev,
          jsonCode: value,
        }));
      } else {
        setDashboardState((prev) => ({ ...prev, javascriptCode: value }));
      }
      if (!isChanged) {
        setIsChanged(true);
      }
    },
    [type, jsonCode, javascriptCode, isChanged]
  );

  return (
    <CodeBlockWrapper>
      <h2>
        <img src={`./images/${type}-icon.png`} alt={`${type}-icon`} />
        {type === 'json' ? 'JSON 대시보드' : 'Javascript 대시보드'}
      </h2>
      <CodeMirror
        value={type === 'json' ? jsonCode : javascriptCode}
        height="655px"
        onChange={onChangeDashboardCode}
        theme={dracula}
        extensions={[type === 'json' ? json() : javascript({ jsx: true })]}
      />
      <DashboardMenu />
    </CodeBlockWrapper>
  );
}

export default memo(CodeBlock);
