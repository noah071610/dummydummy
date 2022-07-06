import styled from '@emotion/styled';
import { GRID } from '@styles/customStyle';
import tw from 'twin.macro';

export const TriggerListWrapper = styled.section`
  ${tw`pl-25px relative bg-white rounded-15px
    shadow-[0 0 11px 3px rgba(0,0,0,0.03)] mb-20px`}
  ${GRID('1fr 200px')}
  p {
    ${tw`pl-5px text-[#281508] font-semibold mb-15px`}
  }
`;

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
  ${tw`p-10px pb-15px bg-[#282A36] h-full rounded-10px `}
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
    word-break: break-all;
  }
`;
