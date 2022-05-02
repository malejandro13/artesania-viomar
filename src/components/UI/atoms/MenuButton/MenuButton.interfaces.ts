import { MouseEventHandler } from 'react';

export interface ButtonProps {
  open?: boolean;
}

export interface MenuButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  open: boolean;
}