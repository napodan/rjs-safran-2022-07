import React, { lazy, Suspense } from 'react';

const LazyToto = lazy(() => import('./Toto'));

const Toto = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyToto {...props} />
  </Suspense>
);

export default Toto;
