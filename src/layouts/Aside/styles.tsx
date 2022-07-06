import styled from '@emotion/styled';
import { FLEX } from '@styles/customStyle';
import tw from 'twin.macro';

export const AsideWrapper = styled.aside`
  ${tw`w-full border-r-1px border-solid border-border h-[90%] overflow-scroll
    h-[730px] bg-white`}
  ${FLEX('left', 'top', 'col')}
`;
