import styled from '@emotion/styled';
import { FLEX, GRID, MQ } from '@styles/customStyle';
import tw from 'twin.macro';

export const DashboardSectionWrapper = styled.section<{ curPage: string }>`
  ${tw`w-full rounded-15px transition-all gap-15px`}
  ${FLEX('left', 'center')}
  opacity: ${(p) => (p.curPage.includes('profile') ? 0.5 : 1)};
  cursor: ${(p) => (p.curPage.includes('profile') ? 'pointer' : 'auto')};
  transform: translateX(
    ${(p) => (p.curPage.includes('javascript') ? '-785px' : 0)}
  );
  ${MQ('960px')} {
    ${tw`block`}
    height: calc(100vh - 20px) !important;
    ${GRID('100% 100%')}
    transform: translateX(
      ${(p) => (p.curPage.includes('javascript') ? 'calc(-100% - 15px)' : 0)}
    );
  }
  ${MQ('700px')} {
    height: calc(100vh - 50px - 20px) !important;
  }
`;
