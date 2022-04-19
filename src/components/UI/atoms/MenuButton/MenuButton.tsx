import { useState } from 'react';
import { Button } from './MenuButton.styled';
import { MenuButtonProps } from './MenuButton.interfaces'

export const MenuButton = ({
  onOpenMenu = () => {},
}: MenuButtonProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleOnClick = () => {
    setIsMenuOpen(!isMenuOpen);
    onOpenMenu(!isMenuOpen);
  }
  return (
    <Button isMenuOpen={isMenuOpen} onClick={handleOnClick}>
      <span />
      <span />
      <span />
    </Button>
  )
}