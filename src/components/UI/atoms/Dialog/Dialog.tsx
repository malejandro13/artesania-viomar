import { DialogProps } from './Dialog.interfaces';
import { DialogClose, DialogContent, DialogWrapper } from './Dialog.styled';

export const Dialog = ({
  children,
  fromLightBox = false,
  open,
  onClose,
}: DialogProps) => (
  <DialogWrapper open={open} fromLightBox={fromLightBox} >
    <DialogContent fromLightBox={fromLightBox}>
      <DialogClose onClick={onClose}>&times;</DialogClose>
      {children}
    </DialogContent>
  </DialogWrapper>
);
