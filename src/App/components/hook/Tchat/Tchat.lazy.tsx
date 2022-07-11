import React, { lazy, Suspense } from 'react';

const LazyTchat = lazy(() => import('./Tchat'));

const Tchat = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyTchat {...props} />
  </Suspense>
);

export default Tchat;
