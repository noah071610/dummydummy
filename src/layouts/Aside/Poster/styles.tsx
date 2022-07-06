import styled from '@emotion/styled';
import { GRID } from '@styles/customStyle';
import tw from 'twin.macro';

export const PosterWrapper = styled.div`
  ${tw`w-full`}
`;

export const Background = styled.div`
  ${tw`relative w-full h-[150px]`}
  background: url('/images/pattern.jpeg') no-repeat center center / 100%;
`;

export const ProfileContainer = styled.div`
  ${tw`absolute -bottom-35px left-20px h-70px gap-5px`}
  ${GRID('70px 1fr')}
  width: calc(100% - 30px);
`;
export const Icon = styled.div`
  ${tw`bg-primary-deep rounded-15px`}
`;
export const SocialContainer = styled.div`
  ${tw`m-15px`}
  ${GRID('repeat(3,40px)', '5px')}
`;
export const SocialInner = styled.div`
  ${tw``}
`;
export const SocialIcon = styled.div`
  ${tw`bg-bg rounded-15px border-1px border-solid border-border`}
  box-shadow: 0 0 15px rgba(0,0,0,0.15);
`;
