import { createContext, useContext } from 'react';

import type { AppRouter } from '@/trpc/routers/_app';
import type { inferRouterOutputs } from '@trpc/server';

type TTSVoiceItem =
  inferRouterOutputs<AppRouter>['voices']['getAll']['custom'][number];

interface TTSVoicesContextValue {
  customVoices: TTSVoiceItem[];
  systemVoices: TTSVoiceItem[];
  allVoices: TTSVoiceItem[];
}

const TTSVoicesContext = createContext<TTSVoicesContextValue | null>(null);

interface TTSVoicesProviderProps {
  children: React.ReactNode;
  value: TTSVoicesContextValue;
}

const TTSVoicesProvider = ({ children, value }: TTSVoicesProviderProps) => {
  return (
    <TTSVoicesContext.Provider value={value}>
      {children}
    </TTSVoicesContext.Provider>
  );
};

const useTTSVoices = () => {
  const context = useContext(TTSVoicesContext);

  if (!context) {
    throw new Error('useTTSVoices must be used within a TTSVoicesProvider');
  }

  return context;
};

export { TTSVoicesProvider, useTTSVoices };
