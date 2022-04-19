import Link from 'next/link';
import { useRouter } from 'next/router';
import { MenuList, MenuNavigationProps } from './MenuNavigation.interfaces';
import { List, Item, Anchor } from './MenuNavigation.styled';

export const MenuNavigation = ({ menuList, isMenuOpen }: MenuNavigationProps) => {
  const router = useRouter();
  return (
    <List isMenuOpen={isMenuOpen}>
      {menuList.map(({ label, link }: MenuList) => (
        <Item>
          <Link href={link}>
            <Anchor className={router.pathname === link ? 'active' : ''}>
              {label}
            </Anchor>
          </Link>
        </Item>
      ))}
    </List>
  )
};
