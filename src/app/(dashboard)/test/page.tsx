import { Suspense } from 'react';

import { ErrorBoundary } from 'react-error-boundary';

import HealthCheck from './health-check';
import { HydrateClient, prefetch, trpc } from '@/trpc/server';

const TestPage = () => {
  prefetch(trpc.health.queryOptions());

  return (
    <HydrateClient>
      <div className="flex flex-col items-center justify-center gap-4 p-8">
        <h1 className="text-2xl font-bold">tRPC Test Page</h1>

        <ErrorBoundary fallback={<p>Something went wrong</p>}>
          <Suspense
            fallback={
              <p className="text-muted-foreground text-sm">Loading...</p>
            }
          >
            <HealthCheck />
          </Suspense>
        </ErrorBoundary>
      </div>
    </HydrateClient>
  );
};

export default TestPage;
