import styled from '@emotion/styled';
import { FLEX, GRID } from '@styles/customStyle';
import tw from 'twin.macro';

export const ContentMenuContainer = styled.div`
  ${tw`absolute bottom-32px right-32px gap-10px`}
  ${FLEX()}
`;

export const MenuIconButton = styled.button<{ isResult: boolean }>`
  ${tw`w-50px h-50px bg-white rounded-full
    shadow-card`}
  ${FLEX()}
  
  ${(p) =>
    p.isResult &&
    `border: 3px solid transparent;
  border-radius: 50%;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(
      107.34deg,
      #ffb0e0 0%,
      #c68dff 22.92%,
      #63f7b9 62.5%,
      #ffe176 100%
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
  `}
`;

export const InfoMessage = styled.h3`
  ${tw`my-10px py-10px`}
  ${FLEX('left', 'center')}
  span, a {
    ${tw`text-16px`}
  }
  a {
    ${tw`px-2px text-primary`}
  }
  svg {
    ${tw`mr-6px`}
  }
`;

export const ModalBtnContainer = styled.div`
  ${tw``}
  ${GRID('1.5fr 1fr 1fr')}
`;
