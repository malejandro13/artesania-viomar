import { MouseEventHandler } from 'react';

export interface ButtonProps {
  open?: boolean;
};

export interface MenuButtonProps {
  ariaLabel: string;
  open: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};
