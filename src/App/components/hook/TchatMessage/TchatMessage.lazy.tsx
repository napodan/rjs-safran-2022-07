import React, { lazy, Suspense } from "react";

const LazyTchatMessage = lazy(() => import("./TchatMessage"));

const TchatMessage = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyTchatMessage
      message={{
        text: "Premier message",
        id: 0,
        dt: "XXXX",
        from: 1,
      }}
      user={undefined}
      {...props}
    />
  </Suspense>
);

export default TchatMessage;
