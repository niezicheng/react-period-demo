import React from 'react';
import { Button, Space } from 'antd';
import PeriodChild from './periodChild';
import OldPeriodChild from './oldPeriodChild';

class Period extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }
  render() {
    const { count } = this.state;
    return (
      <>
        <div>父组件count: { count }</div>
        <Space>
          <Button type="primary" onClick={() => {this.setState({ count: count + 1 })}}>+</Button>
          <Button type="primary" onClick={() => { this.setState({ count: count - 1 })}}>-</Button>
        </Space>
        <PeriodChild count={this.state.count} />
        {/* <OldPeriodChild count={this.state.count} /> */}
      </>
    );
  }
}

export default Period;
