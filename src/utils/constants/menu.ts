export enum PagePaths {
  home = '/',
  leather = '/artesania/cuero',
  wool = '/artesania/lana',
};

export const MENU_LIST = [
	{label: 'Inicio', link: PagePaths.home, ariaLabel: 'Ver página principal'},
	{label: 'Cuero', link: PagePaths.leather, ariaLabel: 'Ver productos de artesanía en cuero'},
	{label: 'Lana', link: PagePaths.wool, ariaLabel: 'Ver productos de artesanía en lana'},
];
