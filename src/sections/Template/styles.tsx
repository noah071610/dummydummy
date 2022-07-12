import styled from '@emotion/styled';
import { FLEX, GRID, MQ } from '@styles/customStyle';
import tw from 'twin.macro';

export const TemplateSectionWrapper = styled.section`
  ${GRID('100% 100%')}
`;

export const TemplateSectionInner = styled.div`
  ${GRID('100%', '10px', '1fr 1fr')};
  ${tw`overflow-hidden h-[700px] relative rounded-15px gap-10px`}
  h2 {
    ${FLEX('left', 'center')}
    .dot {
      ${tw`w-9px h-9px border-3px bg-primary-soft border-solid border-primary-deep 
    rounded-full mr-10px ml-5px mt-3px`}
      box-sizing: border-box;
    }
    ${tw`text-19px mb-15px`}
  }
  .cm-theme {
    ${tw`w-[770px] relative`}
  }
  .cm-editor {
    height: 300px;
  }
  ${MQ('960px')} {
    height: calc(100vh - 30px);
    .cm-theme {
      ${tw`w-full h-full!`}
    }
    .cm-editor {
      height: calc(50vh - 50px);
    }
  }

  ${MQ('700px')} {
    height: calc(100vh - 70px);
    .cm-theme {
      ${tw`w-full`}
      height: calc(50vh - 90px);
    }
    .cm-editor {
      height: calc(50vh - 90px);
    }
  }
`;

export const TemplateCode = styled.div`
  ${tw`h-[340px] relative`}
  ${MQ('960px')} {
    ${tw`h-full`}
  }
`;
export const TemplateResult = styled.div`
  ${tw`w-full h-[340px] relative`}
  ${MQ('960px')} {
    ${tw`h-full`}
  }
`;

export const CodeMenuIconContainer = styled.div`
  ${tw`absolute bottom-20px right-16px gap-10px`}
  ${FLEX('left', 'center')}
  ${MQ('700px')} {
    ${tw`absolute bottom-30px right-10px gap-5px`}
  }
`;

export const TemplateIconButton = styled.button`
  ${tw`w-50px h-50px bg-white rounded-full
shadow-card`}
  ${MQ('700px')} {
    ${tw`w-40px h-40px`}
  }
  &:hover {
    ${tw`bg-primary-deep`}
    svg {
      ${tw`text-white`}
    }
  }
  svg {
    ${tw`transition-all`}
  }
  &.shuffle:hover {
    svg {
      animation: dicing 0.6s cubic-bezier(0.17, 0.67, 0.45, 1.25);
    }
  }
  &.copy:hover {
    svg {
      animation: flip 0.6s forwards;
    }
  }
  &.exchange:hover {
    svg {
      transform: rotateZ(360deg);
    }
  }
  ${FLEX()}
`;
