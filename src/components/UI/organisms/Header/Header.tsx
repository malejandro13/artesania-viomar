import Link from 'next/link';
import { Menu } from '@components/UI/molecules/Menu';
import { HeaderWrapper, Logo } from './Header.styled';

export const Header = () => (
  <HeaderWrapper>
    <Link href="/">
      <Logo>Artesanía Viomar</Logo>
    </Link>
    <Menu  />
  </HeaderWrapper>
);
