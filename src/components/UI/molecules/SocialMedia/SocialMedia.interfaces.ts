export interface SocialMediaObject {
  name: string;
  link: string;
  Icon: JSX.Element[] | JSX.Element | any;
};

export interface SocialMediaProps {
  socialMediaList: SocialMediaObject[];
};