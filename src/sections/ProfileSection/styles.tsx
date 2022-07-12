import styled from '@emotion/styled';
import { FLEX, GRID } from '@styles/customStyle';
import tw from 'twin.macro';

export const ProfileSectionWrapper = styled.section`
  ${tw`overflow-scroll h-[240px] relative p-10px pb-50px`}
  ${GRID('180px 1fr', '50px')}
`;

export const ImageWrapper = styled.div`
  ${tw`w-full h-full`}
`;
export const Image = styled.div`
  ${tw`w-full h-full`}
  background: url('/images/dummy-icon.png') no-repeat center center / 100%;
`;

export const TitleWrapper = styled.div`
  .subTitle {
    ${tw`block text-15px text-primary-deep font-bold mb-6px`}
  }
  h1 {
    ${tw`text-25px`}
  }
`;
export const InfoContainer = styled.div`
  ${tw`text-border text-14px`}
  * {
    ${tw`text-[rgba(0,0,0,0.5)] text-14px`}
  }
  span {
    ${tw`block mb-5px`}
  }
  a:hover {
    ${tw`text-primary-deep`}
  }
`;

export const Description = styled.div`
  ${FLEX('between', 'top', 'col')}
  p {
    ${tw`leading-20px`}
  }
`;
