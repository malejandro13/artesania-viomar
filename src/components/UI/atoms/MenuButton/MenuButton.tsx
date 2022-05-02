import { useEffect, useState } from 'react';
import { Button } from './MenuButton.styled';
import { MenuButtonProps } from './MenuButton.interfaces'

export const MenuButton = ({
  open,
  onClick,
}: MenuButtonProps) => (
  <Button open={open} onClick={onClick}>
    <span />
    <span />
    <span />
  </Button>
);