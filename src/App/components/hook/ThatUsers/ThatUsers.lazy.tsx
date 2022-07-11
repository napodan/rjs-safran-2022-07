import React, { lazy, Suspense } from 'react';

const LazyThatUsers = lazy(() => import('./ThatUsers'));

const ThatUsers = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyThatUsers {...props} />
  </Suspense>
);

export default ThatUsers;
