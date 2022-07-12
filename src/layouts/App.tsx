import { Alert, Snackbar } from '@mui/material';
import DashboardSection from '@sections/Dashboard';
import ProfileSection from '@sections/ProfileSection';
import TemplateSection from '@sections/Template';
import TriggerSection from '@sections/Trigger';
import { curPageState, dashboardState, snackbarState } from '@states';
import { FLEX, GRID, MQ } from '@styles/customStyle';
import 'animate.css';
import { useCallback } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import tw, { styled } from 'twin.macro';
import Aside from './Aside';
import Header from './Header';
import ResultModal from './ResultModal';

const Body = styled.div`
  ${tw`h-screen`}
  ${FLEX('col')}
  .snackbar {
    div {
      align-items: center;
    }
    .MuiAlert-message {
      ${tw`font-bold`}
    }
  }
  ${MQ('700px')} {
    ${tw`bg-bg`}
  }
`;

const Main = styled.main`
  ${tw`w-[1120px] h-[730px] bg-bg rounded-20px overflow-hidden`}
  ${GRID('2fr 5fr')}
  ${MQ('960px')} {
    ${tw`w-full h-full`}
    border-radius: 0;
  }
  ${MQ('700px')} {
    ${tw`block`}
  }
`;

const ContentWrapper = styled.div`
  ${tw`h-[700px] m-15px overflow-hidden`}
  ${MQ('960px')} {
    ${tw`m-10px`}
    height: calc(100vh - 20px);
  }
`;

const ContentInner = styled.div<{ curPage: any }>`
  ${tw`h-auto transition-all relative`}
  transition: 0.32s all cubic-bezier(0,.72,0,1.01);
  transform: translateY(
    ${(p) =>
      p.curPage.includes('#profile')
        ? '0'
        : p.curPage.includes('#template')
        ? '-940px'
        : p.curPage.includes('#trigger')
        ? '-1640px'
        : '-240px'}
  );
  ${MQ('960px')} {
    transform: translateY(
      ${(p) =>
        p.curPage.includes('#profile')
          ? '0'
          : p.curPage.includes('#template')
          ? 'calc(-100vh - 210px)'
          : p.curPage.includes('#trigger')
          ? 'calc(-200vh - 190px)'
          : '-240px'}
    );
  }
  ${MQ('700px')} {
    transform: translateY(
      ${(p) =>
        p.curPage.includes('#profile')
          ? '50px'
          : p.curPage.includes('#template')
          ? 'calc(-100vh - 370px + 120px)'
          : p.curPage.includes('#trigger')
          ? 'calc(-200vh - 370px + 175px)'
          : '-320px'}
    );
  }
`;

function App() {
  const { onResultModal } = useRecoilValue(dashboardState);
  const [{ isOpen, message }, setSnackbarState] = useRecoilState(snackbarState);
  const curPage = useRecoilValue(curPageState);

  const handleClose = useCallback(() => {
    setSnackbarState((prev) => ({ ...prev, isOpen: false }));
  }, []);

  return (
    <Body>
      <Header />
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
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={3000}
        className="snackbar"
        open={isOpen}
        onClose={handleClose}
      >
        <Alert severity="success" sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Body>
  );
}

export default App;
