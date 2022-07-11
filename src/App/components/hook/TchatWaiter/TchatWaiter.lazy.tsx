import React, { lazy, Suspense } from 'react';

const LazyTchatWaiter = lazy(() => import('./TchatWaiter'));

const TchatWaiter = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyTchatWaiter {...props} />
  </Suspense>
);

export default TchatWaiter;
