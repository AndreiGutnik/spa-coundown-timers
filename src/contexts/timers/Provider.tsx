import React, { ReactNode, useContext, useEffect, useMemo, useState, createContext } from 'react';

export interface Timer {
  id: string;
  name: string;
  timer: string;
  style: string;
}

interface ContextProviderType {
  timers: Timer[];
  addTimer: (timer: Timer) => void;
  delTimer: (id: string) => void;
}

const timersContext = createContext<ContextProviderType>(null);

export const useTimer = () => useContext(timersContext);

export interface ProviderProps {
  children: ReactNode;
}

export default function Provider({ children }: ProviderProps): JSX.Element {
  const [timers, setTimers] = useState<Timer[]>([]);

  useEffect(() => {
    if (!localStorage.getItem('timers')) {
      localStorage.setItem('timers', JSON.stringify([]));
    }
    setTimers(JSON.parse(localStorage.getItem('timers') || ''));
  }, []);

  const addTimer = (timer: Timer) => {
    setTimers(prevState => [...prevState, timer]);
  };

  const delTimer = (id: string) => {
    setTimers(prevState => prevState.filter(timer => timer.id !== id));
  };

  const providrValue = useMemo(() => {
    return { timers, addTimer, delTimer };
  }, [timers]);

  return <timersContext.Provider value={providrValue}>{children}</timersContext.Provider>;
}
