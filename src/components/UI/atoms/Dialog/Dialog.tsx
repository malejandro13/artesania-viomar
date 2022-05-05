import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { DialogProps } from './Dialog.interfaces';
import { DialogClose, DialogContent, DialogWrapper } from './Dialog.styled';

export const Dialog = ({
  children,
  fromLightBox = false,
  open,
  onClose,
}: DialogProps) => {

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

  if(!open) {
    return null
  }
  return ReactDOM.createPortal(
    <DialogWrapper open={open} fromLightBox={fromLightBox} >
      <DialogContent fromLightBox={fromLightBox}>
        <DialogClose onClick={() => onClose()}>&times;</DialogClose>
        {children}
      </DialogContent>
    </DialogWrapper>,
    document.getElementById("__next") as HTMLElement,
  );
};
