import styled from '@emotion/styled';
import { FLEX, MQ } from '@styles/customStyle';
import tw from 'twin.macro';

export const HeaderWrapper = styled.header`
  ${tw`w-full fixed top-0 left-0 h-50px border-solid border-b-1px border-border
    mb-10px z-30 hidden bg-white`}
  box-shadow: 0 0 5px #883e1111;
  ${MQ('700px')} {
    ${tw`block`}
  }
`;

export const HeaderInner = styled.div`
  ${tw`h-full w-full absolute top-0 left-0 z-100`}
  background-image: radial-gradient(#fdafb1, #fad0c4de , #fad0c498);
  background-size: 100% 500%;
  background-position: 100% 50%;
  ${FLEX()}
  span {
    ${tw`ml-10px text-18px font-bold text-title`}
  }
`;

export const LogoWrapper = styled.div`
  ${tw`cursor-pointer bg-white rounded-full p-5px `}
  ${FLEX()}
`;
export const Logo = styled.div`
  ${tw`w-20px h-20px transition-all ml-2px`}
  background: url('./images/dummy-icon.png') no-repeat center center / 100% 100%;
`;
