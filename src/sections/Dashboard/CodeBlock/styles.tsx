import styled from '@emotion/styled';
import { FLEX, MQ } from '@styles/customStyle';
import tw from 'twin.macro';

export const CodeBlockWrapper = styled.div`
  ${tw`relative`}
  h2 {
    ${FLEX('left', 'center')}
    ${tw`text-21px mb-15px pl-5px`}
    img {
      ${tw`mr-5px w-30px h-30px`}
    }
  }
  .cm-theme {
    ${tw`w-[770px]`}
  }
  ${MQ('960px')} {
    .cm-theme {
      width: 100%;
      height: calc(100vh - 20px - 70px);
    }
    .cm-editor {
      height: 100%;
    }
  }
  ${MQ('700px')} {
    .cm-theme {
      height: calc(100vh - 50px - 90px);
    }
  }
`;
