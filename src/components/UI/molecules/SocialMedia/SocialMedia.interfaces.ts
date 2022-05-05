export interface SocialMediaObject {
  name: string;
  link: string;
  Icon: React.ElementType;
};

export interface SocialMediaProps {
  socialMediaList: SocialMediaObject[];
};
