import styled from '@emotion/styled';
import { FLEX, MQ } from '@styles/customStyle';
import tw from 'twin.macro';

export const DashboardMenuContainer = styled.div`
  ${tw`absolute bottom-32px right-32px gap-10px`}
  ${FLEX()}
  ${MQ('700px')} {
    ${tw`absolute bottom-20px right-10px gap-5px`}
  }
`;

export const MenuIconButton = styled.button<{ isResult: boolean }>`
  ${tw`w-50px h-50px bg-white rounded-full
    shadow-card transition-all`}
  ${FLEX()}
  ${MQ('700px')} {
    ${tw`w-40px h-40px`}
  }
  &:hover {
    ${tw`bg-primary-deep`}
    svg {
      ${tw`text-white`}
    }
  }
  &.reset {
    svg {
      transition: all 0.44s ease-in-out;
    }
    &:hover {
      svg {
        transform: rotateZ(-360deg);
      }
    }
  }
  &.result {
    &:hover {
      svg {
        animation: heartBeat 1.2s ease-in-out;
      }
    }
  }
`;
