import { MouseEventHandler } from 'react';

export interface LightBoxProps {
  open: boolean;
  onClose: MouseEventHandler<HTMLButtonElement>;
  children: JSX.Element[] | JSX.Element;
};
