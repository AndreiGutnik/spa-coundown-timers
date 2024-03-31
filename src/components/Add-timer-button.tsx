import React, { lazy, useState } from 'react';
import { nanoid } from 'nanoid';
import { PlusIcon } from '@heroicons/react/24/solid';
import { AddTimerInputValues } from './Add-timer-form';
import { useTimer } from '../contexts/timers/Provider';
const AddTimerFormModal = lazy(() => import('./Add-timer-form-modal'));

export default function AddTimerButton() {
  const [show, setShow] = useState<boolean>(false);
  const { addTimer } = useTimer();

  const handleAddTimer = (values: AddTimerInputValues) => {
    const id = nanoid();
    const currentTimer = { id, ...values };
    addTimer(currentTimer);
    const timersLocalStorage = JSON.parse(localStorage.getItem('timers') || '');
    localStorage.setItem('timers', JSON.stringify([...timersLocalStorage, currentTimer]));
    setShow(false);
  };

  return (
    <>
      <div className="px-5 py-3 mt-3 mb-5 border-b-4 rounded border-gray-600">
        <button
          className="flex gap-2 items-center px-3 py-2 transition duration-250 eease-in hover:scale-105"
          onClick={() => {
            setShow(true);
          }}
        >
          <PlusIcon className="h-5 w-5" />
          Add timer
        </button>
      </div>
      <AddTimerFormModal onSubmit={handleAddTimer} show={show} onClose={() => setShow(false)} />
    </>
  );
}
