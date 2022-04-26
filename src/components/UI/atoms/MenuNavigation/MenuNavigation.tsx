import Link from 'next/link';
import { useRouter } from 'next/router';
import { MenuObject, MenuNavigationProps } from './MenuNavigation.interfaces';
import { List, Item, Anchor } from './MenuNavigation.styled';

export const MenuNavigation = ({ menuList, isMenuOpen }: MenuNavigationProps) => {
  const router = useRouter();
  return (
    <List isMenuOpen={isMenuOpen}>
      {menuList.map(({ label, link }: MenuObject) => (
        <Item key={`menu-${label}`}>
          <Link href={link} passHref>
            <Anchor className={router.pathname === link ? 'active' : ''}>
              {label}
            </Anchor>
          </Link>
        </Item>
      ))}
    </List>
  )
};
