import Overlay from '@layouts/Overlay';
import { ReactNode } from 'react';
import { ModalWrapper } from './styles';

interface IProps {
  closeModal: () => void;
  isDeletingOverlay: boolean;
  children: ReactNode;
}

function Modal({ closeModal, isDeletingOverlay, children }: IProps) {
  return (
    <>
      <Overlay
        isDeletingOverlay={isDeletingOverlay}
        close={closeModal}
        zIndex={950}
      />
      <ModalWrapper
        style={{
          animation: isDeletingOverlay
            ? 'fade-down 0.4s cubic-bezier(0,.99,.54,.98) forwards'
            : 'fade-up 0.4s cubic-bezier(0,.99,.54,.98) forwards',
        }}
        data-testid="modal"
      >
        {children}
      </ModalWrapper>
    </>
  );
}

export default Modal;
