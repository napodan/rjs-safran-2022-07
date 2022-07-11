import React, { lazy, Suspense } from "react";

const LazyTchatUser = lazy(() => import("./TchatUser"));

const TchatUser = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyTchatUser
      user={{
        id: 0,
        nick: "champix",
        fullName: "Alex Champix",
        img: null,
        timeLastAction: new Date().toString(),
      }}
      {...props}
    />
  </Suspense>
);

export default TchatUser;
