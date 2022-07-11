import React, { lazy, Suspense } from 'react';
import { ITchatUserProps } from './TchatUser';

const LazyTchatUser = lazy(() => import('./TchatUser'));

const TchatUser = (props: JSX.IntrinsicAttributes &  ITchatUserProps) => (
  <Suspense fallback={null}>
    <LazyTchatUser {...props} />
  </Suspense>
);

export default TchatUser;
