import React, { lazy, Suspense } from 'react';
import { IHeaderProps } from './Header';

const LazyHeader = lazy(() => import('./Header'));

const Header = (props: JSX.IntrinsicAttributes & IHeaderProps) => (
  <Suspense fallback={null}>
    <LazyHeader {...props} />
  </Suspense>
);

export default Header;
