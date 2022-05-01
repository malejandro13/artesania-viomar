import { DialogProps } from './Dialog.interfaces';
import { DialogClose, DialogContent, DialogWrapper } from './Dialog.styled';

export const Dialog = ({ children, open, onClose }: DialogProps) => (
  <DialogWrapper open={open} >
    <DialogContent>
      <DialogClose onClick={onClose}>&times;</DialogClose>
      {children}
    </DialogContent>
  </DialogWrapper>
);
