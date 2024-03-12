import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import './tailwind.css';
import TimersProvider from './contexts/timers/Provider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <TimersProvider>
    <App />
  </TimersProvider>
);
