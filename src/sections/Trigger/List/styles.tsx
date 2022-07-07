import styled from '@emotion/styled';
import { ELLIPSIS, FLEX, GRID } from '@styles/customStyle';
import tw from 'twin.macro';

export const TriggerListWrapper = styled.div``;

export const TriggerBox = styled.div`
  ${tw`pl-25px relative bg-white rounded-15px
  shadow-[0 0 11px 3px rgba(0,0,0,0.03)] mb-20px z-10`}
  ${GRID('1fr 200px')}
p {
    ${tw`pl-5px text-[#281508] font-semibold mb-15px`}
  }
`;
export const OptionalTriggerWrapper = styled.div`
  ${FLEX('left', 'bottom', 'col')}
  ${tw`relative`}

  &:before {
    ${tw`absolute -top-80px w-2px h-full left-79px bg-primary-soft
      `}
    content: '';
  }
  ${TriggerBox} {
    ${tw`w-[630px]`}
    &:before {
      ${tw`absolute rounded-full bg-primary-deep 
        w-10px h-10px top-1/2 -left-40px z-10`}
      content: '';
      transform: translate(-50%, -50%);
    }
  }
`;
export const OptionalTrigger = styled.div``;

export const TitleWrapper = styled.div`
  h2 {
    ${tw`inline-block text-17px mb-10px text-primary-deep
     py-5px px-12px rounded-10px bg-primary-soft`}
  }
  svg {
    ${tw`ml-20px mr-10px text-[#5096ff66]`}
  }
`;

export const Left = styled.div`
  ${tw`py-15px`}
`;
export const Right = styled.div`
  ${tw`p-10px`}
`;
export const CodeBlock = styled.div`
  ${tw`p-10px pb-15px bg-[#282A36] h-full rounded-10px cursor-pointer
    `}
  span {
    ${tw`block text-15px text-center`}
  }
  .trigger-text {
    ${tw`text-[#a9b7c6]`}
  }
  .arrow {
    ${tw`my-10px`}
  }
  .result-text {
    ${tw`text-gray leading-20px`}
    ${ELLIPSIS(1.3, 2, 'auto')}
  }
`;
