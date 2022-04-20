export interface MenuList {
  label: string;
  link: string;
}

export interface MenuNavigationProps {
  menuList: MenuList[];
  isMenuOpen?: boolean;
  backgroundColor: string;
}

export interface ListProps {
  isMenuOpen?: boolean;
  backgroundColor: string;
}