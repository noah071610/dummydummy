import Overlay from '@layouts/Overlay';
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useState,
} from 'react';
import { ModalWrapper } from './styles';

interface IProps {
  setOnModal: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}

function Modal({ setOnModal, children }: IProps) {
  const [isDeletingOverlay, setIsDeletingOverlay] = useState(false);
  const closeModal = useCallback(() => {
    setIsDeletingOverlay(true);
    setTimeout(() => {
      setOnModal((prev: boolean) => !prev);
      setIsDeletingOverlay(false);
    }, 180);
  }, []);
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
