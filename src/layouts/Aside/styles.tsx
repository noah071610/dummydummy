import styled from '@emotion/styled';
import { FLEX, MQ } from '@styles/customStyle';
import tw from 'twin.macro';

export const AsideWrapper = styled.aside`
  ${tw`border-r-1px border-solid border-border h-[90%] overflow-y-scroll
    h-[730px] bg-white left-0 top-0 w-[320px]`}
  ${FLEX('left', 'top', 'col')}
  ${MQ('960px')} {
    ${tw`h-full w-[250px]`}
  }
  ${MQ('700px')} {
    transform: translateX(-100%);
    ${tw`fixed top-0 left-0 w-[320px] z-20 transition-all`}
  }
`;
