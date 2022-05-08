import { SocialMediaObject, SocialMediaProps, } from './SocialMedia.interfaces';
import { Item, List } from './SocialMedia.styled';

export const SocialMedia = ({ socialMediaList }: SocialMediaProps) => (
  <List aria-label="Contáctanos en nuestras redes sociales">
    {socialMediaList.map(({name, ariaLabel, link, Icon}: SocialMediaObject) => (
      <Item key={`${name}-social-media`}>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          aria-label={ariaLabel}
        >
          <Icon />
        </a>
      </Item>
    ))}
  </List>
);
