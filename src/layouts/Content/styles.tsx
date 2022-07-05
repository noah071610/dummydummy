import styled from '@emotion/styled';
import tw from 'twin.macro';

export const ContentWrapper = styled.div`
  ${tw`relative h-full`}
`;

export const CodeWrapper = styled.div`
  ${tw`overflow-hidden p-15px rounded-15px`}
  .cm-theme {
    ${tw`w-full`}
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
`;
