import React from 'react';
import { Divider } from 'antd';
import PeriodComponent from './components/period';
import EventBubble from './components/eventBubble';
import MyContext from './components/MyContext';
import './App.less';

function App() {
  return (
    <>
      {/* 生命周期demo */}
      <PeriodComponent />
      <Divider />
      {/* 事件冒泡demo */}
      <EventBubble />
      <Divider />
      {/* Context的使用 */}
      <MyContext />
    </>
  );
}

export default App;
