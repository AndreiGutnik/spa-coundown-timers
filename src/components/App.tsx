import React from 'react';
import { GlobalStyle } from './GlobalStyle';
import Layout from './Layout';
import TimersList from './TimersList';
import AddTimerButton from './Add-timer-button';

export const App = () => {
  return (
    <>
      <Layout>
        <AddTimerButton />
        <TimersList />
      </Layout>
      <GlobalStyle />
    </>
  );
};
