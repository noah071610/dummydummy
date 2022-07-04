import { useCallback, useEffect } from 'react';
import tw, { styled } from 'twin.macro';

const OverlayWrapper = styled.div<{ isDeletingOverlay: boolean }>`
  ${tw`fixed top-0 left-0 z-overlay w-screen h-screen bg-[rgba(0,0,0,0.6)]
  opacity-0 transition-opacity`}
  backdrop-filter: blur(20px);
  ${(p) =>
    p.isDeletingOverlay
      ? 'animation: fade-out 0.18s ease-in-out forwards;'
      : 'animation: fade-in 0.18s ease-in-out forwards;'}
  @keyframes fade-in {
    to {
      opacity: 1;
    }
  }
  @keyframes fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

interface IProps {
  close: (v?: any) => any;
  zIndex: number;
  isDeletingOverlay: boolean;
}

function Overlay({ close, zIndex, isDeletingOverlay }: IProps) {
  const onClickOverlay = useCallback(() => {
    close();
  }, []);

  useEffect(() => {
    document.body.style.cssText = `position: fixed; top: -${
      window.scrollY
    }px; left:${
      window.innerWidth <= 1220 ? 0 : (window.innerWidth - 1220) / 2
    }px;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = `position: ""; top: "";`;
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    };
  });
  return (
    <OverlayWrapper
      isDeletingOverlay={isDeletingOverlay}
      style={{ zIndex }}
      onClick={onClickOverlay}
    />
  );
}

export default Overlay;
