import type { NextPage } from 'next'
import { Header } from '@components/UI/organisms/Header';
import { SocialMedia } from '@components/UI/molecules/SocialMedia';
import { SOCIAL_MEDIA_LIST } from '@constants/socialMedia';
import { Section } from './Layout.styled';
import { AlignItems, LayoutProps } from './Layout.interfaces';

export const Layout = ({children, alignItems = AlignItems.start}: LayoutProps) => (
  <Section alignItems={alignItems} >
    <Header />
    {children}
    <SocialMedia socialMediaList={SOCIAL_MEDIA_LIST} />
  </Section>
);
