import { createContext } from 'react';
import { Timer } from './Provider';

interface ContextProviderType {
  timers: Timer[];
  addTimer: (timer: Timer) => void;
  delTimer: (id: string) => void;
}

export default createContext<ContextProviderType>(null);
