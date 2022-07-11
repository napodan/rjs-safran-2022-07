import React, { lazy, Suspense } from "react";

const LazyTchatMessages = lazy(() => import("./TchatMessages"));

const TchatMessages = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyTchatMessages users={[]} {...props} />
  </Suspense>
);

export default TchatMessages;
