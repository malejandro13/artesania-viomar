import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu } from '@components/UI/molecules/Menu';
import { HeaderWrapper, Logo } from './Header.styled';

export const Header = () => {
  const [headerConfig, setHeaderConfig] = useState({
    showHeader: true,
    lastScrollY: 0,
    showHeaderBackground: false,
  });

  const controlHeader = () => {
    if (typeof window !== 'undefined') { 
      setHeaderConfig({
        showHeader: !!!(window.scrollY > headerConfig.lastScrollY && window.scrollY > 100),
        lastScrollY: window.scrollY,
        showHeaderBackground: window.scrollY > 50,
      }); 
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlHeader);

      return () => {
        window.removeEventListener('scroll', controlHeader);
      };
    }
  }, [headerConfig.lastScrollY]);

  return (
    <HeaderWrapper {...headerConfig} >
      <Link href="/" passHref>
        <Logo aria-label="Logo Artesania Viomar, volver a la página de inicio">Viomar</Logo>
      </Link>
      <Menu />
    </HeaderWrapper>
  );
};
