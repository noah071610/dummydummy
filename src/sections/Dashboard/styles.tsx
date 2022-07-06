import styled from '@emotion/styled';
import tw from 'twin.macro';

export const DashboardSectionWrapper = styled.section`
  ${tw`overflow-hidden relative rounded-15px`}
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
