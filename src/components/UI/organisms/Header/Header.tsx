import Link from 'next/link';
import { Menu } from '@components/UI/molecules/Menu';
import { HeaderWrapper, Logo } from './Header.styled';
import { HeaderProps } from './Header.interfaces';

export const Header = ({ backgroundColor }: HeaderProps) => (
  <HeaderWrapper>
    <Link href="/" passHref>
      <Logo>Artesanía Viomar</Logo>
    </Link>
    <Menu backgroundColor={backgroundColor}  />
  </HeaderWrapper>
);
