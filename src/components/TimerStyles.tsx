import React, { ReactNode } from 'react';
import clsx from 'clsx';

export enum Style {
  Green = 'Green',
  Red = 'Red',
  Orange = 'Orange',
  Blue = 'Blue',
}

export interface TimerStylesProps {
  children: ReactNode;
  style: Style;
  disabled?: boolean;
}

export default function TimerStyles({ children, style, disabled }: TimerStylesProps) {
  return (
    <div
      className={clsx(
        'w-full mb-3 flex items-center justify-between px-5 py-1 rounded-full gap-6',
        style === Style.Green && ' bg-green-100 text-green-700',
        style === Style.Red && ' bg-red-100 text-red-700',
        style === Style.Orange && ' bg-orange-100 text-orange-700',
        style === Style.Blue && ' bg-blue-100 text-blue-700',
        {
          ['opacity-75 cursor-not-allowed']: disabled,
        }
      )}
    >
      {children}
    </div>
  );
}
