import styled from '@emotion/styled';
import { NavWrapper } from '@layouts/Aside/Nav/styles';
import tw from 'twin.macro';

export const HeaderMenuWrapper = styled.div<{ onHeaderMenu: boolean }>`
  ${tw`bg-white w-full z-10`}
  transition:transform 0.22s cubic-bezier(.17,.67,0,1.07);
  transform: translateY(${(p) => (p.onHeaderMenu ? '50px' : '-100vh')});
  ${NavWrapper} {
    ${tw`mt-0 py-20px overflow-scroll`}
    height: calc(100vh);
  }
`;
