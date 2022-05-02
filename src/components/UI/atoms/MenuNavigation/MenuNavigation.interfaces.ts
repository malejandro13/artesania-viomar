export interface MenuObject {
  label: string;
  link: string;
}

export interface MenuNavigationProps {
  menuList: MenuObject[];
  open?: boolean;
}

export interface ListProps {
  open?: boolean;
}