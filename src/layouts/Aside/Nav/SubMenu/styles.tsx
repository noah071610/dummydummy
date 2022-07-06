import styled from '@emotion/styled';
import tw from 'twin.macro';

export const SubMenuWrapper = styled.div``;

export const SubMenuList = styled.ul`
  ${tw`relative overflow-hidden mx-20px py-0 max-h-0 opacity-0`}
  transition: max-height 0.3s cubic-bezier(.61,1.46,.95,1.14), opacity 0.18s linear,padding 0.3s;
  &.open-sub_menu {
    ${tw`py-10px h-auto opacity-100`}
    transition: max-height 1.2s ease-out, opacity 0.18s linear,padding 0.3s;
    max-height: 1600px;
  }
  &:before {
    ${tw`absolute -top-30px w-2px h-full left-39px bg-primary-soft
      `}
    content: '';
  }
  li {
    ${tw`mx-10px`}
    button {
      ${tw`relative pb-2px mb-3px w-full text-left py-13px pl-50px rounded-15px`}
      &:before {
        ${tw`absolute rounded-full bg-primary-deep 
        w-7px h-7px top-1/2 left-30px z-10`}
        content: '';
        transform: translate(-50%, -50%);
      }
      span {
        ${tw`text-15px font-bold inline-block transition-all`}
      }
      svg {
        ${tw`transition-all mr-7px`}
      }
      .trigger-svg {
        ${tw`mr-3px`}
      }
      &:hover {
        span,
        svg {
          ${tw`text-primary-deep`}
        }
        svg {
          transform: rotateY(360deg);
        }
      }
      &.is-active {
        span,
        svg {
          ${tw`text-primary-deep`}
        }
      }
    }
  }
`;
