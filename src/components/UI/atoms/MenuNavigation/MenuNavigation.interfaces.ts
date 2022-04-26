export interface MenuObject {
  label: string;
  link: string;
}

export interface MenuNavigationProps {
  menuList: MenuObject[];
  isMenuOpen?: boolean;
}

export interface ListProps {
  isMenuOpen?: boolean;
}