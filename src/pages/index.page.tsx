import type { NextPage } from 'next'
import { Header } from '@components/UI/organisms/Header';
import { MainContent } from '@components/UI/organisms/MainContent';
import { Thumb } from '@components/UI/atoms/Thumb';
import { ThumbNames, THUMBS } from '@constants/thumb';
import { useState } from 'react';
import { MAIN_CONTENT_LIST } from '@constants/mainContent';
import { MainContentProps } from '@components/UI/organisms/MainContent/MainContent.interfaces';
import { SocialMedia } from '@components/UI/molecules/SocialMedia';
import { SOCIAL_MEDIA_LIST } from '@constants/socialMedia';
import { Section } from './pages.styled';

const Home: NextPage = () => {
  const [mainContentInfo, setMainContentInfo] = useState<MainContentProps>(MAIN_CONTENT_LIST[ThumbNames.viomar])

  const handleOnSelectedThumb = (selectedThumb: string) => {
    setMainContentInfo(MAIN_CONTENT_LIST[selectedThumb as keyof typeof MAIN_CONTENT_LIST]);
  };

  return (
    <Section >
      <Header />
      <MainContent {...mainContentInfo} />
      <Thumb
        thumbs={THUMBS}
        onSelectedThumb={handleOnSelectedThumb}
      />
      <SocialMedia socialMediaList={SOCIAL_MEDIA_LIST} />
    </Section>
  );
};

export default Home;
