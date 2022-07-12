import styled from '@emotion/styled';
import { FLEX, GRID } from '@styles/customStyle';
import tw from 'twin.macro';

export const TemplateSectionWrapper = styled.section`
  ${tw`overflow-hidden h-[700px] relative rounded-15px gap-10px`}
  ${GRID('', '10px', '1fr 1fr')};
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
`;

export const TemplateCode = styled.div`
  ${tw`w-full h-[340px] relative`}
`;
export const TemplateResult = styled.div`
  ${tw`w-full h-[340px] relative`}
`;

export const CodeMenuIconContainer = styled.div`
  ${tw`absolute bottom-20px right-16px gap-10px`}
  ${FLEX('left', 'center')}
`;

export const TemplateIconButton = styled.button`
  ${tw`w-50px h-50px bg-white rounded-full
shadow-card`}
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
