import React, { lazy, Suspense } from 'react';

const LazyTchatWriter = lazy(() => import('./TchatWriter'));

const TchatWriter = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyTchatWriter {...props} />
  </Suspense>
);

export default TchatWriter;
