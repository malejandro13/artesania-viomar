import Link from 'next/link';
import { Menu } from '@components/UI/molecules/Menu';
import { HeaderWrapper, Logo } from './Header.styled';

export const Header = () => (
  <HeaderWrapper>
    <Link href="/" passHref>
      <Logo aria-label="Logo Artesania Viomar, volver a la página de inicio">Viomar</Logo>
    </Link>
    <Menu />
  </HeaderWrapper>
);
