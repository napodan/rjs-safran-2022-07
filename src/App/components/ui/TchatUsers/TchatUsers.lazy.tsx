import React, { lazy, Suspense } from 'react';
import { ITchatUsersProps } from './TchatUsers';

const LazyTchatUsers = lazy(() => import('./TchatUsers'));

const TchatUsers = (props: JSX.IntrinsicAttributes & ITchatUsersProps) => (
  <Suspense fallback={null}>
    <LazyTchatUsers {...props} />
  </Suspense>
);

export default TchatUsers;
