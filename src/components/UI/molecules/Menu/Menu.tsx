import { useEffect, useState } from "react";
import { MenuButton } from "@components/UI/atoms/MenuButton";
import { MenuNavigation } from "@components/UI/atoms/MenuNavigation";
import { MENU_LIST } from '@constants/menu';
import { MenuWrapper } from './Menu.styled';
import { useRouter } from "next/router";

export const Menu = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage] = useState(router.asPath);

  const handleOnClickButtonMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    if(currentPage !== router.asPath) {
      setIsMenuOpen(false);
    };
  }, [router.asPath]);

  return (
    <MenuWrapper>
     <MenuButton open={isMenuOpen} onClick={handleOnClickButtonMenu} />
     <MenuNavigation menuList={MENU_LIST} open={isMenuOpen} />
    </MenuWrapper>
  )
};
