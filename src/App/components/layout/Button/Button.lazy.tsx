import React, { lazy, Suspense } from 'react';
import { IButtonProps } from './Button';

const LazyButton = lazy(() => import('./Button'));

const Button = (props: JSX.IntrinsicAttributes & IButtonProps) => (
  <Suspense fallback={null}>
    <LazyButton {...props} />
  </Suspense>
);

export default Button;
