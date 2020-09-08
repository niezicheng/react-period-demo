import React from 'react';
import { Divider } from 'antd';
import DynamicContext from './DynamicContext';
import NestContext from './NestContext';

export default () => {
  return (
    <>
      {/* 动态Context */}
      <DynamicContext />
      <Divider />
      {/* 嵌套Context */}
      <NestContext />
    </>
  );
}
