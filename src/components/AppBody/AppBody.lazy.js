import React, { lazy, Suspense } from 'react';

const LazyAppBody = lazy(() => import('./AppBody'));

const AppBody = props => (
  <Suspense fallback={null}>
    <LazyAppBody {...props} />
  </Suspense>
);

export default AppBody;
