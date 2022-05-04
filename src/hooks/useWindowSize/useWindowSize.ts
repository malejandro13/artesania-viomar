import { useEffect, useState } from 'react';
import { Size } from './useWindowSize.interfaces';

export const useWindowSize = (): Size =>  {
  const [windowSize, setWindowSize] = useState<Size>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};
