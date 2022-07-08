import DashboardSection from '@sections/Dashboard';
import ProfileSection from '@sections/ProfileSection';
import TemplateSection from '@sections/Template';
import TriggerSection from '@sections/Trigger';
import { curPageState, dashboardState } from '@states';
import { FLEX, GRID, MQ } from '@styles/customStyle';
import 'animate.css';
import { useRecoilValue } from 'recoil';
import tw, { styled } from 'twin.macro';
import Aside from './Aside';
import ResultModal from './ResultModal';

const Body = styled.div`
  ${tw`h-screen`}
  ${FLEX()}
`;

const Main = styled.main`
  ${tw`w-[1120px] h-[730px] bg-bg rounded-20px overflow-hidden`}
  ${GRID('2fr 5fr')}
  ${MQ('1120px')} {
    ${tw`w-full h-full`}
  }
`;

const ContentWrapper = styled.div`
  ${tw`h-[700px] m-15px overflow-hidden`}
`;

const ContentInner = styled.div<{ curPage: any }>`
  ${tw`h-full transition-all relative`}
  transition: 0.32s all cubic-bezier(0,.72,0,1.01);
  transform: translateY(
    ${(p) =>
      p.curPage.includes('#profile')
        ? '0'
        : p.curPage.includes('#template')
        ? '-900px'
        : p.curPage.includes('#trigger')
        ? '-1600px'
        : '-200px'}
  );
`;

function App() {
  const { onResultModal } = useRecoilValue(dashboardState);
  const curPage = useRecoilValue(curPageState);
  console.log(curPage);

  return (
    <Body>
      <Main>
        <Aside />
        <ContentWrapper>
          <ContentInner curPage={curPage}>
            <ProfileSection />
            <DashboardSection />
            <TemplateSection />
            <TriggerSection />
          </ContentInner>
        </ContentWrapper>
      </Main>
      {onResultModal && <ResultModal />}
    </Body>
  );
}

export default App;
