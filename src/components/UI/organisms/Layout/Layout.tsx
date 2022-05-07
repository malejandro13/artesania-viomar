import type { NextPage } from 'next'
import { Header } from '@components/UI/organisms/Header';
import { MainContent } from '@components/UI/organisms/MainContent';
import { Thumb } from '@components/UI/atoms/Thumb';
import { ThumbNames, THUMBS } from '@constants/thumb';
import { useState } from 'react';
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
