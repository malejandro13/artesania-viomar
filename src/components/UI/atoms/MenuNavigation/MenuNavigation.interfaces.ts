export interface MenuObject {
  label: string;
  ariaLabel: string;
  link: string;
}

export interface MenuNavigationProps {
  currentPage: string;
  menuList: MenuObject[];
  open?: boolean;
}

export interface ListProps {
  open?: boolean;
}