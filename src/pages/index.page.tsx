import { MainContent } from '@components/UI/organisms/MainContent';
import { Thumb } from '@components/UI/atoms/Thumb';
import { useState } from 'react';
import { Layout } from '@components/UI/organisms/Layout';
import client from '../../apollo-client';
import { getLandingPageInfo } from 'graphql/queries/landingPage';
import { LandingPageProps } from './index.interfaces';
import { LandingPageDataResponse } from 'graphql/interfaces/landingPage';

const Home = ({ landingPageInfoList }: LandingPageProps) => {
  const [mainContentInfo, setMainContentInfo] = useState<LandingPageDataResponse>(landingPageInfoList[0])

  const handleOnSelectedThumb = (selectedThumb: string) => {
    setMainContentInfo(
      landingPageInfoList.find(({ section }) => (selectedThumb === section)) || landingPageInfoList[0]
    );
  };

  return (
    <Layout alignItems="center">
      <MainContent {...mainContentInfo} />
      <Thumb
        thumbs={landingPageInfoList}
        onSelectedThumb={handleOnSelectedThumb}
      />
    </Layout>
  );
};

export async function getStaticProps() {
  const { data: landingPage } = await client.query({
    query: getLandingPageInfo,
  });

  return {
    props: {
      landingPageInfoList: landingPage.landingPageCollection.items,
    },
  };
};

export default Home;
