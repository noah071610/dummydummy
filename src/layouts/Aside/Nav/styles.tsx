import styled from '@emotion/styled';
import tw from 'twin.macro';

export const NavWrapper = styled.div`
  ${tw`w-full pt-70px`}
`;

export const MenuList = styled.ul`
  a {
    ${tw`block my-5px`}
  }
  li {
    ${tw`mx-10px pr-10px pl-20px py-18px rounded-15px
      transition-all mb-5px`}
    span {
      ${tw`text-19px font-bold`}
    }
    &:hover {
      ${tw`bg-[#ed922a30]`}
      span {
        ${tw`text-[#DF6945]`}
      }
    }
  }
`;
