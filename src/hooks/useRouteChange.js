import { useEffect } from 'react';
import { useRouter } from 'next/router';

const useRouteChange = func => {
  const { pathname } = useRouter();

  useEffect(() => func(), [pathname]); // eslint-disable-line react-hooks/exhaustive-deps
};

export default useRouteChange;
