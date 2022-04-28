export interface MenuObject {
  label: string;
  link: string;
}

export interface MenuNavigationProps {
  menuList: MenuObject[];
  isMenuOpen?: boolean;
  backgroundColor: string;
}

export interface ListProps {
  isMenuOpen?: boolean;
  backgroundColor: string;
}