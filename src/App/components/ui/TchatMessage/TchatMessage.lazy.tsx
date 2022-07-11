import React, { lazy, Suspense } from 'react';
import { ITchatMessageProps } from './TchatMessage';

const LazyTchatMessage = lazy(() => import('./TchatMessage'));

const TchatMessage = (props: JSX.IntrinsicAttributes & ITchatMessageProps) => (
  <Suspense fallback={null}>
    <LazyTchatMessage {...props} />
  </Suspense>
);

export default TchatMessage;
