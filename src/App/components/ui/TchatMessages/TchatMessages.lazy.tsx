import React, { lazy, Suspense } from 'react';
import { ITchatMessagesProps } from './TchatMessages';

const LazyTchatMessages = lazy(() => import('./TchatMessages'));

const TchatMessages = (props: JSX.IntrinsicAttributes & ITchatMessagesProps) => (
  <Suspense fallback={null}>
    <LazyTchatMessages {...props} />
  </Suspense>
);

export default TchatMessages;
