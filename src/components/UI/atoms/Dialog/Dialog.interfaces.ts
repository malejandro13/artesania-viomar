import { MouseEventHandler } from 'react';

export interface DialogProps {
  children: JSX.Element[] | JSX.Element;
  fromLightBox?: boolean;
  open: boolean;
  onClose: MouseEventHandler<HTMLButtonElement>;
};

export interface DialogWrapperProps {
  open: boolean;
  fromLightBox?: boolean;
};

export interface DialogContentProps {
  fromLightBox?: boolean;
};
