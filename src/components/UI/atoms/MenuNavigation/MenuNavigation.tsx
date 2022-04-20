import Link from 'next/link';
import { useRouter } from 'next/router';
import { MenuList, MenuNavigationProps } from './MenuNavigation.interfaces';
import { List, Item, Anchor } from './MenuNavigation.styled';

export const MenuNavigation = ({ menuList, isMenuOpen, backgroundColor }: MenuNavigationProps) => {
  const router = useRouter();
  return (
    <List isMenuOpen={isMenuOpen} backgroundColor={backgroundColor}>
      {menuList.map(({ label, link }: MenuList) => (
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
