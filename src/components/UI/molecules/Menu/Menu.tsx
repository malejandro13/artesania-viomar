import { useState } from "react";
import { MenuButton } from "@components/UI/atoms/MenuButton";
import { MenuNavigation } from "@components/UI/atoms/MenuNavigation";
import { MENU_LIST } from '@constants/menu';
import { MenuWrapper } from './Menu.styled';
import { MenuProps } from "./Menu.interfaces";

export const Menu = ({ backgroundColor }: MenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleOnOpenMenu = (isMenuOpen: boolean) => setIsMenuOpen(isMenuOpen);

  return (
    <MenuWrapper>
     <MenuButton onOpenMenu={handleOnOpenMenu} />
     <MenuNavigation menuList={MENU_LIST} isMenuOpen={isMenuOpen} backgroundColor={backgroundColor} />
    </MenuWrapper>
  )
};
