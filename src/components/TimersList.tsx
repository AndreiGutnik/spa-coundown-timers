import React, { useContext } from 'react';
import timersContext from '../contexts/timers/context';
import TimerItem from './TimerItem';

export interface TimersListProps {}

export default function TimersList({}: TimersListProps) {
  const { timers } = useContext(timersContext);

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
