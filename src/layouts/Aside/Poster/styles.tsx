import styled from '@emotion/styled';
import { FLEX, GRID } from '@styles/customStyle';
import tw from 'twin.macro';

export const PosterWrapper = styled.div`
  ${tw`w-full relative`}
`;

export const LogoWrapper = styled.div`
  ${tw`cursor-pointer bg-white rounded-full
    border-solid border border-border`}
  ${FLEX()}
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
`;
export const Logo = styled.div`
  ${tw`w-35px h-35px ml-5px transition-all`}
  background: url('/images/dummy-icon.png') no-repeat center center / 100% 100%;
`;

export const Background = styled.div`
  ${tw`w-full h-[150px]`}
  background: url('/images/pattern.jpeg') no-repeat center center / 100%;
`;

export const ProfileContainer = styled.div`
  ${tw`absolute -bottom-35px left-20px h-70px`}
  ${GRID('70px 1fr')}
  width: calc(100% - 30px);
  ${LogoWrapper}:hover {
    ${Logo} {
      transform: scale(1.2);
    }
  }
`;

export const BackgroundWrapper = styled.div`
  ${tw`w-full overflow-hidden cursor-pointer`}
  div {
    ${tw`transition-all`}
  }
  &:hover {
    div {
      transform: scale(1.2);
    }
  }
`;

export const SocialContainer = styled.div`
  ${tw`m-15px`}
  ${GRID('repeat(3,40px)', '5px')}
`;
export const SocialInner = styled.div`
  ${tw``}
`;
export const SocialIcon = styled.button`
  ${tw`bg-bg rounded-15px border-1px border-solid border-border`}
  box-shadow: 0 0 15px rgba(0,0,0,0.15);
  ${FLEX()}
  svg {
    ${tw`transition-all`}
  }
  &:hover {
    ${tw`bg-primary-deep border-[#FFF4F0]`}
    svg {
      ${tw`text-white`}
      animation: bounceIcon 1.1s ease-in-out;
    }
  }

  @keyframes bounceIcon {
    from,
    20%,
    53%,
    to {
      -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }

    40%,
    43% {
      -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
      animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
      -webkit-transform: translate3d(0, -15px, 0) scaleY(1.1);
      transform: translate3d(0, -15px, 0) scaleY(1.1);
    }

    70% {
      -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
      animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
      -webkit-transform: translate3d(0, -7px, 0) scaleY(1.05);
      transform: translate3d(0, -7px, 0) scaleY(1.05);
    }

    80% {
      -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      -webkit-transform: translate3d(0, 0, 0) scaleY(0.95);
      transform: translate3d(0, 0, 0) scaleY(0.95);
    }

    90% {
      -webkit-transform: translate3d(0, -4px, 0) scaleY(1.02);
      transform: translate3d(0, -4px, 0) scaleY(1.02);
    }
  }
`;
