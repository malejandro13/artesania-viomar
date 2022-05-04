export interface SocialMediaObject {
  name: string;
  link: string;
  Icon: JSX.Element[] | JSX.Element;
};

export interface SocialMediaProps {
  socialMediaList: SocialMediaObject[];
};