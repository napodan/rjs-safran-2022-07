import React, { lazy, Suspense } from "react";

const LazyTchatUsers = lazy(() => import("./TchatUsers"));

const TchatUsers = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyTchatUsers users={[]} {...props} />
  </Suspense>
);

export default TchatUsers;
