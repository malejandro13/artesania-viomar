export interface MenuList {
  label: string;
  link: string;
}

export interface MenuNavigationProps {
  menuList: MenuList[];
  isMenuOpen?: boolean;
}

export interface ListProps {
  isMenuOpen?: boolean;
}