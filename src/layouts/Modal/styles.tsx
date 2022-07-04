import tw, { styled } from 'twin.macro';

export const ModalWrapper = styled.div`
  ${tw`fixed top-1/2 left-1/2 z-modal
    w-1/2 h-[800px] bg-white p-40px rounded-40px`}
  div:first-of-type {
    ${tw`h-[600px]`}
  }
  code {
    ${tw`text-white`}
    * {
      ${tw`text-white`}
    }
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
