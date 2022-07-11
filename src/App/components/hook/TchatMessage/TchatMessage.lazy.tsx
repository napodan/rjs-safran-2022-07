import React, { lazy, Suspense } from 'react';

const LazyTchatMessage = lazy(() => import('./TchatMessage'));

const TchatMessage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyTchatMessage {...props} />
  </Suspense>
);

export default TchatMessage;
