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
import ResultModal from './ResultModal';

const Body = styled.div`
  ${tw`h-screen`}
  ${FLEX()}
  .snackbar {
    div {
      align-items: center;
    }
    .MuiAlert-message {
      ${tw`font-bold`}
    }
  }
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
        ? '-940px'
        : p.curPage.includes('#trigger')
        ? '-1640px'
        : '-240px'}
  );
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
