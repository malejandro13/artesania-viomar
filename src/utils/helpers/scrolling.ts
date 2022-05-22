export const preventPageScrolling = (preventScrolling?: boolean) => {
  const body = document.querySelector('body') as HTMLBodyElement;
  if(preventScrolling) {
    body.style.cssText = 'overflow-y:hidden;';
  } else {
    body.removeAttribute('style');
  }
};
