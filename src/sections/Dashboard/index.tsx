import { javascript } from '@codemirror/lang-javascript';
import { dashboardState } from '@states';
import { dracula } from '@uiw/codemirror-theme-dracula';
import CodeMirror from '@uiw/react-codemirror';
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import DashboardMenu from './DashboardMenu';
import { DashboardSectionWrapper } from './styles';

interface IProps {}

function DashboardSection({}: IProps) {
  const [{ code }, setDashboardState] = useRecoilState(dashboardState);
  const onChangeDashboardCode = useCallback((value: any) => {
    setDashboardState((prev) => ({ ...prev, code: value }));
  }, []);

  return (
    <DashboardSectionWrapper>
      <CodeMirror
        value={code}
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
