import styled from '@emotion/styled';
import { FLEX } from '@styles/customStyle';
import tw from 'twin.macro';

export const NavWrapper = styled.div`
  ${tw`w-full mt-70px h-full`}
`;

export const MenuIcon = styled.div`
  ${tw`p-7px bg-white rounded-full
  border-1px border-border border-solid
  transition-all`}
`;

export const MenuList = styled.ul`
  .main_menu {
    ${tw`block relative rounded-15px mx-10px mt-5px`}
    button {
      ${tw`block text-left w-full h-full
          px-20px py-12px transition`}
      transition: 0.2s all;
      ${FLEX('between', 'center')}
      span {
        ${tw`text-19px font-bold`}
      }
    }
    &:hover {
      ${tw`bg-primary-soft`}
      span {
        ${tw`text-primary-deep`}
      }
      ${MenuIcon} {
        ${tw`border-primary-deep bg-primary-deep`}
        animation: jello 1s ease-in-out;
        svg {
          ${tw`text-white`}
        }
      }
    }
    &.is-active {
      ${tw`bg-primary-soft`}
      span {
        ${tw`text-primary-deep`}
      }
      ${MenuIcon} {
        ${tw`border-primary-deep bg-primary-deep`}
        animation: jello 1s ease-in-out;
        svg {
          ${tw`text-white`}
        }
      }
    }
  }
  &.main_menu:first-of-type {
    ${tw`mt-0`}
  }
`;

export const Menu = styled.li<{ isActive: boolean }>`
  ${(p) => p.isActive && tw`bg-primary-soft`}
`;
