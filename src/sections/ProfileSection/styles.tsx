import styled from '@emotion/styled';
import { FLEX, GRID, MQ } from '@styles/customStyle';
import tw from 'twin.macro';

export const ProfileSectionWrapper = styled.section`
  ${tw`overflow-scroll h-[240px] relative p-10px pb-50px`}
  ${GRID('180px 1fr', '50px')}
  ${MQ('700px')} {
    ${tw`block h-[370px]`}
  }
`;

export const ImageWrapper = styled.div`
  ${tw`w-full h-full`};
  ${MQ('700px')} {
    ${FLEX()}
    ${tw`w-full h-100px mb-20px`}
  }
`;
export const Image = styled.div`
  ${tw`w-full h-full`}
  background: url('/images/dummy-icon.png') no-repeat center center / 100%;
  ${MQ('700px')} {
    ${tw`w-100px h-100px ml-15px`}
  }
`;

export const TitleWrapper = styled.div`
  .subTitle {
    ${tw`block text-15px text-primary-deep font-bold mb-6px`}
  }
  h1 {
    ${tw`text-25px`}
  }
  ${MQ('700px')} {
    .subTitle {
      ${tw`text-center`}
    }
    h1 {
      ${tw`text-center mb-10px`}
    }
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
  ${MQ('700px')} {
    span {
      ${tw`mb-10px`}
    }
    .info-anchor-list {
      ${FLEX()}
    }
  }
`;

export const Description = styled.div`
  ${FLEX('between', 'top', 'col')}
  p {
    ${tw`leading-20px`}
  }
  ${MQ('700px')} {
    align-items: center;
    p {
      ${tw`mb-15px text-center`}
    }
  }
`;
