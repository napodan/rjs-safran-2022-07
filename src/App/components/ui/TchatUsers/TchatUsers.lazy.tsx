import React, { lazy, Suspense } from 'react';

const LazyTchatUsers = lazy(() => import('./TchatUsers'));

const TchatUsers = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyTchatUsers {...props} />
  </Suspense>
);

export default TchatUsers;
