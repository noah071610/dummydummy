import { FLEX, MQ } from '@styles/customStyle';
import tw, { styled } from 'twin.macro';

export const ResultModalWrapper = styled.div`
  ${tw`fixed top-1/2 left-1/2 z-modal
    w-[900px] h-[800px] bg-white p-30px rounded-40px`}
  h2 {
    ${tw`text-24px mb-15px pl-5px`}
  }
  .cm-editor {
    ${tw`h-[695px]`}
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
  ${MQ('960px')} {
    ${tw`w-[90%]`}
  }
  ${MQ('700px')} {
    ${tw`w-full p-10px h-full`}
    border-radius: 0;
    .cm-editor {
      ${tw`h-[calc(100vh - 70px)]`}
    }
  }
`;

export const ResultMenuContainer = styled.div`
  ${tw`absolute bottom-48px right-48px gap-10px`}
  ${MQ('700px')} {
    ${tw`bottom-24px right-20px gap-5px`}
  }
  ${FLEX()}
  .copy {
    &:hover,
    &:active {
      svg {
        animation: flip 0.6s forwards;
      }
    }
  }
  .shuffle {
    &.dicing {
      animation: dicing 0.6s cubic-bezier(0.17, 0.67, 0.45, 1.25);
    }
    &:hover {
      svg {
        animation: dicing 0.6s cubic-bezier(0.17, 0.67, 0.45, 1.25);
      }
    }
  }
`;

export const MenuIconButton = styled.button`
  ${tw`w-50px h-50px bg-white rounded-full
    shadow-card transition-all`}
  ${MQ('700px')} {
    ${tw`w-40px h-40px`}
  }
  ${FLEX()}
  &:hover {
    ${tw`bg-primary-deep`}
    svg {
      ${tw`text-white`}
    }
  }
`;
