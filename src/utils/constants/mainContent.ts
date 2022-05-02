import { PagePaths } from './menu';
import { ThumbNames } from './thumb';

export const MAIN_CONTENT_LIST = {
	[ThumbNames.viomar]: {
    title: 'Artesanía Viomar',
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nulla illum sequi dignissimos iusto quibusdam laborum in, labore exercitationem a ratione repellat consequuntur numquam, voluptate sit culpa nemo doloremque. Aperiam.',
    ctaUrl: PagePaths.leather,
    ctaText: 'Ver más',
    ctaAriaLabel: 'Ver productos de artesanía en cuero',
    imageUrl: '/assets/images/home/viomar.png',
    imageAltText: 'Artesanía Viomar',
	},
  [ThumbNames.leather]: {
    title: 'Artesanía en cuero',
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nulla illum sequi dignissimos iusto quibusdam laborum in, labore exercitationem a ratione repellat consequuntur numquam, voluptate sit culpa nemo doloremque. Aperiam.',
    ctaUrl: PagePaths.leather,
    ctaText: 'Ver más',
    ctaAriaLabel: 'Ver productos de artesanía en cuero',
    imageUrl: '/assets/images/home/cuero.png',
    imageAltText: 'Producto de artesanía en cuero',
  },
  [ThumbNames.wool]: {
    title: 'Artesanía en Lana',
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nulla illum sequi dignissimos iusto quibusdam laborum in, labore exercitationem a ratione repellat consequuntur numquam, voluptate sit culpa nemo doloremque. Aperiam.',
    ctaUrl: PagePaths.wool,
    ctaText: 'Ver más',
    ctaAriaLabel: 'Ver productos de artesanía en lana',
    imageUrl: '/assets/images/home/lana.png',
    imageAltText: 'Producto de artesanía en lana',
  }
};
