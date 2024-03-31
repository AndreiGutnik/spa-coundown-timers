import React from 'react';
import TimerItem from './TimerItem';
import { useTimer } from '../contexts/timers/Provider';

export interface TimersListProps {}

export default function TimersList({}: TimersListProps) {
  const { timers } = useTimer();

  return (
    <>
      <ul>
        {timers.map(timer => (
          <TimerItem key={timer.id} timer={timer} />
        ))}
      </ul>
    </>
  );
}
