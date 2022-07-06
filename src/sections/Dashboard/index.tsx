import { javascript } from '@codemirror/lang-javascript';
import { exampleCode } from '@resource/templates';
import { dashboardState } from '@states';
import { dracula } from '@uiw/codemirror-theme-dracula';
import CodeMirror from '@uiw/react-codemirror';
import { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import DashboardMenu from './DashboardMenu';
import { DashboardSectionWrapper } from './styles';

interface IProps {}

function DashboardSection({}: IProps) {
  const setDashboardState = useSetRecoilState(dashboardState);
  const onChangeDashboardCode = useCallback((value: any) => {
    setDashboardState((prev) => ({ ...prev, code: value }));
  }, []);
  return (
    <DashboardSectionWrapper>
      <CodeMirror
        value={exampleCode}
        height="700px"
        onChange={onChangeDashboardCode}
        theme={dracula}
        extensions={[javascript({ jsx: true })]}
      />
      <DashboardMenu />
    </DashboardSectionWrapper>
  );
}

export default DashboardSection;
