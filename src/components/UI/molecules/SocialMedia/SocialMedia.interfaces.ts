export interface SocialMediaObject {
  name: string;
  ariaLabel: string;
  link: string;
  Icon: React.ElementType;
};

export interface SocialMediaProps {
  socialMediaList: SocialMediaObject[];
};
