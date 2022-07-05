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
  .main-menu {
    ${tw`block relative rounded-15px mx-10px`}
    a, button {
      ${tw`block text-left w-full h-full
        px-20px py-12px transition`}
      ${FLEX('between', 'center')}
      span {
        ${tw`text-19px font-bold`}
      }
      transition: 0.2s all;
    }
    &:hover {
      ${tw`bg-[#fe500011]`}
      span {
        ${tw`text-[#ff6e6e]`}
      }
      ${MenuIcon} {
        ${tw`border-[#ff6e6e] bg-[#ff6e6e]`}
        animation: jello 1s ease-in-out;
        svg {
          ${tw`text-white`}
        }
      }
    }
  }
`;

export const SubMenuList = styled.ul`
  ${tw`relative py-10px mx-20px rounded-15px overflow-hidden`}
  &:before {
    ${tw`absolute -top-30px w-2px h-full left-39px bg-[#fe500011]
      `}
    content: '';
  }
  li {
    ${tw`mx-10px`}
    a {
      ${tw`relative pb-2px block py-13px pl-50px rounded-15px`}
      &:before {
        ${tw`absolute rounded-full bg-[#ff6e6e] 
        w-7px h-7px top-1/2 left-30px z-10`}
        content: '';
        transform: translate(-50%, -50%);
      }
      span {
        ${tw`text-15px font-bold inline-block transition-all`}
      }
      svg {
        ${tw`transition-all`}
      }
      &:hover {
        ${tw`bg-[#fe500011]`}
        span,
          svg {
          ${tw`text-[#ff6e6e]`}
        }
        svg {
          transform: rotateY(360deg);
        }
        span {
          transform: translateX(5px);
        }
      }
    }
  }
`;
