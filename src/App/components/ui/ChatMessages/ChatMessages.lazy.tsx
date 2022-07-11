import React, { lazy, Suspense } from 'react';

const LazyChatMessages = lazy(() => import('./ChatMessages'));

const ChatMessages = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyChatMessages {...props} />
  </Suspense>
);

export default ChatMessages;
