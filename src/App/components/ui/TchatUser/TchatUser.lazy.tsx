import React, { lazy, Suspense } from 'react';

const LazyTchatUser = lazy(() => import('./TchatUser'));

const TchatUser = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyTchatUser {...props} />
  </Suspense>
);

export default TchatUser;
