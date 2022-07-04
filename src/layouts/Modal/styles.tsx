import { FLEX } from '@styles/customStyle';
import tw, { styled } from 'twin.macro';

export const ModalWrapper = styled.div`
  ${tw`fixed top-1/2 left-1/2 z-modal
    w-1/2 h-[800px] bg-white p-30px rounded-40px`}
  ${FLEX('col')}
  .cm-theme {
    ${tw`w-full h-[600px]`}
  }
  .cm-line {
    ${tw`text-[#a9b7c6] text-18px py-3px`}
  }
  .cm-focused {
    ${tw`outline-none!`}
    outline-offset: 0;
  }
  .cm-editor {
    ${tw`py-15px px-30px rounded-20px!`}
  }
  .cm-gutters {
    display: none;
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

export const CancelBtn = styled.button`
  ${tw`absolute top-40px right-40px bg-[#F2F2F2] rounded-full p-10px`}
`;
