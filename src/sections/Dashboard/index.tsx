import { curPageState } from '@states';
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import CodeBlock from './CodeBlock';
import { DashboardSectionWrapper } from './styles';

function DashboardSection() {
  const [curPage, setCurPageState] = useRecoilState(curPageState);
  const onClickDashboard = useCallback(() => {
    if (curPage.includes('profile')) {
      setCurPageState('#dash-json');
      window.location.hash = `dash-json`;
    }
  }, [curPage]);

  return (
    <DashboardSectionWrapper onClick={onClickDashboard} curPage={curPage}>
      <CodeBlock type="json" />
      <CodeBlock type="javascript" />
    </DashboardSectionWrapper>
  );
}

export default DashboardSection;
