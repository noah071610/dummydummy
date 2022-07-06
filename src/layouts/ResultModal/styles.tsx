import { FLEX, GRID } from '@styles/customStyle';
import tw, { styled } from 'twin.macro';

export const ResultModalWrapper = styled.div`
  ${tw`fixed top-1/2 left-1/2 z-modal
    w-1/2 h-[800px] bg-white p-30px rounded-40px`}
  ${FLEX('col')}
  .cm-theme {
    ${tw`w-full h-[600px]`}
  }
  @keyframes fade-up {
    from {
      opacity: 0;
      transform: translate(-50%, -10%);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }
  @keyframes fade-down {
    from {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
    to {
      opacity: 0;
      transform: translate(-50%, -10%);
    }
  }
`;

export const InfoMessage = styled.h3`
  ${tw`my-10px py-10px`}
  ${FLEX('left', 'center')}
  span, a {
    ${tw`text-16px`}
  }
  a {
    ${tw`px-2px text-primary-deep`}
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
    svg {
    }
    &:hover {
      svg {
        transition: 0.6s cubic-bezier(0.17, 0.67, 0.45, 1.25);
        transform: rotateZ(720deg);
      }
    }
    &.dicing {
      svg {
        animation: dicing 0.6s cubic-bezier(0.17, 0.67, 0.45, 1.25);
      }
    }
  }
  button:last-of-type {
    // close
    background: linear-gradient(to right, #89216b, #da4453);
  }
`;
