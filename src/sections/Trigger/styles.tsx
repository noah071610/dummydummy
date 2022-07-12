import styled from '@emotion/styled';
import { MQ } from '@styles/customStyle';
import tw from 'twin.macro';

export const TriggerSectionWrapper = styled.section`
  ${tw`overflow-scroll h-[700px] relative p-10px`}
  h1 {
    ${tw`pl-5px text-25px mb-20px`}
  }
  ${MQ('960px')} {
    height: calc(100vh - 30px);
  }
  ${MQ('450px')} {
    ${tw` pt-30px`}
  }
`;
