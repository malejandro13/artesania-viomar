import { useEffect, useState } from 'react';
import { Button } from './MenuButton.styled';
import { MenuButtonProps } from './MenuButton.interfaces'

export const MenuButton = ({
  ariaLabel,
  open,
  onClick,
}: MenuButtonProps) => (
  <Button aria-label={ariaLabel} open={open} onClick={onClick}>
    <span />
    <span />
    <span />
  </Button>
);