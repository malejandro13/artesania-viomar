import { useEffect, useState } from "react";
import { MenuButton } from "@components/UI/atoms/MenuButton";
import { MenuNavigation } from "@components/UI/atoms/MenuNavigation";
import { MENU_LIST } from '@constants/menu';
import { MenuWrapper } from './Menu.styled';
import { useRouter } from "next/router";

export const Menu = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrenPage] = useState(router.asPath);

  const handleOnClickButtonMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    if(currentPage !== router.asPath) {
      setCurrenPage(router.asPath);
      setIsMenuOpen(false);
    };
  }, [router.asPath]);

  const buttonAriaLabel = !isMenuOpen
    ? 'Al hacer click en este botón se abrirá una ventana de dialogo donde podrás navegar por el menú'
    : 'Al hacer click en este botón se cerrará la ventana de dialogo del menú'

  return (
    <MenuWrapper>
     <MenuButton
      ariaLabel={`Menú. ${buttonAriaLabel}`}
      open={isMenuOpen}
      onClick={handleOnClickButtonMenu}
    />
     <MenuNavigation currentPage={currentPage} menuList={MENU_LIST} open={isMenuOpen} />
    </MenuWrapper>
  );
};
