import { useEffect, useState } from 'react';
import { ClientOnlyProps } from './ClientOnly.interfaces';

export const ClientOnly = ({ children, ...delegated }: ClientOnlyProps) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <div {...delegated}>{children}</div>;
};
