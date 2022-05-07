import type { NextPage } from 'next'
import { MainContent } from '@components/UI/organisms/MainContent';
import { Thumb } from '@components/UI/atoms/Thumb';
import { ThumbNames, THUMBS } from '@constants/thumb';
import { useState } from 'react';
import { MAIN_CONTENT_LIST } from '@constants/mainContent';
import { MainContentProps } from '@components/UI/organisms/MainContent/MainContent.interfaces';
import { Layout } from '@components/UI/organisms/Layout';

const Home: NextPage = () => {
  const [mainContentInfo, setMainContentInfo] = useState<MainContentProps>(MAIN_CONTENT_LIST[ThumbNames.viomar])

  const handleOnSelectedThumb = (selectedThumb: string) => {
    setMainContentInfo(MAIN_CONTENT_LIST[selectedThumb as keyof typeof MAIN_CONTENT_LIST]);
  };

  return (
    <Layout alignItems="center">
      <MainContent {...mainContentInfo} />
      <Thumb
        thumbs={THUMBS}
        onSelectedThumb={handleOnSelectedThumb}
      />
    </Layout>
  );
};

export default Home;
