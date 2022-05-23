let scrollPosition = 0

export const preventPageScrolling = (preventScrolling?: boolean) => {
  const body = document.querySelector('body') as HTMLBodyElement;
  if(preventScrolling) {
    scrollPosition = window.pageYOffset;
    body.style.cssText = `position:fixed;overflow-y:hidden;top:-${scrollPosition}px;width:100%;`;
  } else {
    body.removeAttribute('style');
    window.scrollTo(0, scrollPosition);
  }
};
