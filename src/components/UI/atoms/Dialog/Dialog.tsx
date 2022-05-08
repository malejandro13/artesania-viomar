import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { DialogProps } from './Dialog.interfaces';
import { DialogClose, DialogContent, DialogWrapper } from './Dialog.styled';

export const Dialog = ({
  children,
  fromLightBox = false,
  open,
  onClose,
}: DialogProps) => {
  const dialogElement = useRef<HTMLInputElement>(null);

  const closeOnEscapeKeyDown = (event: KeyboardEvent) => {
    if ((event.key) === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  useEffect(() => {
    dialogElement?.current?.focus();
  }, [open]);

  if(!open) {
    return null;
  }

  return ReactDOM.createPortal(
    <DialogWrapper
      ref={dialogElement}
      open={open}
      fromLightBox={fromLightBox}
      tabIndex={-1}
    >
      <DialogContent fromLightBox={fromLightBox}>
        <DialogClose
          aria-label="Cerrar, al hacer click en este botón se cerrará la ventana de dialogo"
          onClick={() => onClose()}
        >
          &times;
        </DialogClose>
        {children}
      </DialogContent>
    </DialogWrapper>,
    document.getElementById("__next") as HTMLElement,
  );
};
