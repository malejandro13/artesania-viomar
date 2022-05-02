import Link from 'next/link';
import { MenuObject, MenuNavigationProps } from './MenuNavigation.interfaces';
import { List, Item, Anchor } from './MenuNavigation.styled';

export const MenuNavigation = ({ currentPage, menuList, open }: MenuNavigationProps) => (
  <List open={open}>
    {menuList.map(({ label, link }: MenuObject) => (
      <Item key={`menu-${label}`}>
        <Link href={link} passHref>
          <Anchor className={currentPage === link ? 'active' : ''}>
            {label}
          </Anchor>
        </Link>
      </Item>
    ))}
  </List>
);
