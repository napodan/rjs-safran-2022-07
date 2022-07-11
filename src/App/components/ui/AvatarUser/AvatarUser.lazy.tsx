import React, { lazy, Suspense } from 'react';
import { IAvatarUserProps } from './AvatarUser';

const LazyAvatarUser = lazy(() => import('./AvatarUser'));

const AvatarUser = (props: JSX.IntrinsicAttributes & IAvatarUserProps) => (
  <Suspense fallback={null}>
    <LazyAvatarUser {...props} />
  </Suspense>
);

export default AvatarUser;
