import styled from '@emotion/styled';
import { FLEX } from '@styles/customStyle';
import tw from 'twin.macro';

export const DashboardSectionWrapper = styled.section<{ curPage: string }>`
  ${tw`w-full rounded-15px transition-all gap-15px`}
  ${FLEX('left', 'center')}
  opacity: ${(p) => (p.curPage.includes('profile') ? 0.5 : 1)};
  cursor: ${(p) => (p.curPage.includes('profile') ? 'pointer' : 'auto')};
  transform: translateX(
    ${(p) => (p.curPage.includes('javascript') ? '-785px' : 0)}
  );
`;
