import { SocialMediaObject, SocialMediaProps, } from './SocialMedia.interfaces';
import { Item, List } from './SocialMedia.styled';

export const SocialMedia = ({ socialMediaList }: SocialMediaProps) => (
  <List>
    {socialMediaList.map(({name, link, Icon}: SocialMediaObject) => (
      <Item key={`${name}-social-media`}>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          <Icon />
        </a>
      </Item>
    ))}
  </List>
);
