import React from 'react';
import { Divider } from 'antd';
import PeriodComponent from './components/period';
import EventBubble from './components/eventBubble';
import './App.less';

function App() {
  return (
    <>
      <PeriodComponent />
      <Divider />
      <EventBubble />
    </>
  );
}

export default App;
