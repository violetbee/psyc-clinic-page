'use client';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import type { ReactNode } from 'react';
import React from 'react';

const Provider = ({ children }: { children: ReactNode }) => {
  const [client] = React.useState(
    new QueryClient({ defaultOptions: { queries: { staleTime: 5000 } } })
  );

  return (
    <QueryClientProvider client={client}>
      <SessionProvider>{children}</SessionProvider>
    </QueryClientProvider>
  );
};

export default Provider;
