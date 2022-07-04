import styled from '@emotion/styled';
import { FLEX, GRID } from '@styles/customStyle';
import tw from 'twin.macro';

export const ContentMenuContainer = styled.div`
  ${tw`absolute bottom-32px right-32px gap-10px`}
  ${FLEX()}
`;

export const MenuIconButton = styled.button<{ isResult: boolean }>`
  ${tw`w-50px h-50px bg-white rounded-full
    shadow-card`}
  ${FLEX()}
  
  ${(p) =>
    p.isResult &&
    `border: 3px solid transparent;
  border-radius: 50%;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(
      107.34deg,
      #ffb0e0 0%,
      #c68dff 22.92%,
      #63f7b9 62.5%,
      #ffe176 100%
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
  `}
`;

export const InfoMessage = styled.h3`
  ${tw`my-10px py-10px`}
  ${FLEX('left', 'center')}
  span, a {
    ${tw`text-16px`}
  }
  a {
    ${tw`px-2px text-primary`}
  }
  svg {
    ${tw`mr-6px`}
  }
`;

export const ModalBtnContainer = styled.div`
  ${tw``}
  ${GRID('3fr 1fr 1fr', '10px')}
  button {
    ${tw`py-20px px-25px rounded-15px font-bold text-white text-18px`}
    svg {
      ${tw`ml-10px`}
    }
  }
  button:first-of-type {
    // copy
    background: -webkit-linear-gradient(to right, #f37335, #fdc830);
    background: linear-gradient(to right, #f37335, #fdc830);
    &:hover {
      svg {
        animation: flip 0.6s forwards;
      }
    }
  }
  button:nth-of-type(2) {
    // shuffle
    background-image: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%);
    &:hover {
      svg {
        animation: dicing 0.6s cubic-bezier(0.17, 0.67, 0.45, 1.25) forwards;
      }
    }
  }
  button:last-of-type {
    // close
    background: linear-gradient(to right, #89216b, #da4453);
  }

  @keyframes flip {
    from {
      transform: rotateY(0);
    }

    to {
      transform: rotateY(360deg);
    }
  }

  @keyframes dicing {
    from {
      transform: rotateZ(0);
    }

    to {
      transform: rotateZ(720deg);
    }
  }
`;
