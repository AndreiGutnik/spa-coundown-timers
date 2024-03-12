import React, { ReactNode } from 'react';

export interface LayoutProps {
  children?: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <header>
        <div className="py-2 bg-indigo-300">
          <h1 className="text-3xl text-gray-700">Coundown timerss</h1>
        </div>
      </header>
      <main>{children}</main>
    </>
  );
}
