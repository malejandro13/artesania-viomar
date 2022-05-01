import { MouseEventHandler } from 'react';

export interface DialogProps {
  children: JSX.Element[] | JSX.Element;
  open: boolean;
  onClose: MouseEventHandler<HTMLButtonElement>;
};

export interface DialogWrapperProps {
  open: boolean;
};
