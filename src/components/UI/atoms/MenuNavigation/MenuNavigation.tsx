import Link from 'next/link';
import { MenuObject, MenuNavigationProps } from './MenuNavigation.interfaces';
import { List, Item, Anchor } from './MenuNavigation.styled';

export const MenuNavigation = ({ currentPage, menuList, open }: MenuNavigationProps) => (
  <nav aria-label="Menu principal">
    <List open={open} >
      {menuList.map(({ label, ariaLabel, link }: MenuObject) => (
        <Item key={`menu-${label}`}>
          <Link href={link} passHref>
            <Anchor className={currentPage === link ? 'active' : ''} aria-label={ariaLabel}>
              {label}
            </Anchor>
          </Link>
        </Item>
      ))}
    </List>
  </nav>
);
