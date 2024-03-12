import React, { useContext, useEffect, useRef, useState } from 'react';
import { Timer } from '@/contexts/timers/Provider';
import timersContext from '../contexts/timers/context';
import { msToTime, timerToMs } from '../helpers/helpers';
import TimerStyles, { Style } from './TimerStyles';

export interface TimerItemProps {
  timer: Timer;
}

export default function TimerItem({ timer }: TimerItemProps) {
  const { delTimer } = useContext(timersContext);
  const [currentTimer, setCurrentTimer] = useState<number>(() =>
    timerToMs(timer.timer)
  );
  const [timeforTimer, setTimeforTimer] = useState<number>(0);
  const [time, setTime] = useState<string>(msToTime(currentTimer));
  const intervalId = useRef(null);

  useEffect(() => {
    if (!timeforTimer) {
      setTime(msToTime(currentTimer));
    }
    if (timeforTimer && time !== '00:00:00') {
      intervalId.current = setInterval(() => {
        const timeMs = timeforTimer - Date.parse(String(new Date()));
        if (timeMs === 0) stop();
        setTime(msToTime(timeMs));
      }, 1000);
    }
  }, [timeforTimer]);

  const start = () => {
    const deadline = currentTimer + Date.parse(String(new Date()));
    setTimeforTimer(deadline);
  };

  const stop = () => {
    setTimeforTimer(0);
    setCurrentTimer(timeforTimer - Date.parse(String(new Date())));
    if (intervalId.current !== null) {
      clearInterval(intervalId.current);
    }
  };

  return (
    <li>
      <TimerStyles style={Style[timer.style as keyof typeof Style]}>
        <p className="text-4xl text-center ">{time}</p>
        <p className="text-xl  basis-80 grow">{timer.name}</p>

        <div className="flex items-center gap-3 ">
          <button
            className=" px-3 py-1 bg-slate-50 border-2 rounded-2xl border-gray-600 text-sm font-medium transition duration-250 eease-in hover:border-transparent hover:bg-green-600 hover:text-slate-50"
            type="button"
            onClick={start}
          >
            Start
          </button>
          <button
            className=" px-3 py-1 bg-slate-50 border-2 rounded-2xl border-gray-600 text-sm font-medium transition duration-250 eease-in hover:border-transparent hover:bg-orange-400 hover:text-slate-50"
            type="button"
            onClick={stop}
          >
            Stop
          </button>
          <button
            type="button"
            className="h-8 px-3 py-1 bg-slate-50 rounded-2xl text-sm font-medium border-2 border-gray-600 transition duration-250 eease-in hover:border-transparent hover:bg-red-500 hover:text-slate-50"
            onClick={() => delTimer(timer.id)}
          >
            Delete
          </button>
        </div>
      </TimerStyles>
    </li>
  );
}
