import React, { ReactNode, useMemo, useState } from 'react';
import timersContext from './context';

export interface Timer {
  id: string;
  name: string;
  timer: string;
  style: string;
}

export interface ProviderProps {
  children: ReactNode;
}

export default function Provider({ children }: ProviderProps): JSX.Element {
  const [timers, setTimers] = useState<Timer[]>([]);

  const addTimer = (timer: Timer) => {
    setTimers(prevState => [...prevState, timer]);
  };

  const delTimer = (id: string) => {
    setTimers(prevState => prevState.filter(timer => timer.id !== id));
  };

  const providrValue = useMemo(() => {
    return { timers, addTimer, delTimer };
  }, [timers]);

  return (
    <timersContext.Provider value={providrValue}>
      {children}
    </timersContext.Provider>
  );
}
