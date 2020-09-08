import React, { Component } from 'react';
import { Space } from 'antd';
import { MyContext, themes } from './themeContext';
import ThemeButton from './themeButton';

function ToolBar(props) {
  return (
    <ThemeButton onClick={props.changeTheme}>
      changeTheme
    </ThemeButton>
  )
}

export default class ContextComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: themes.light,
    }
    this.changeTheme = this.changeTheme.bind(this);
  }

  changeTheme() {
    this.setState(preState => ({
      theme: preState.theme === themes.dark ? themes.light : themes.dark,
    }))
  }


  render() {
    return (
      <Space>
        <MyContext.Provider value={this.state.theme}>
          <ToolBar changeTheme={this.changeTheme} />
        </MyContext.Provider>
        <ThemeButton>ThemeButton</ThemeButton>
      </Space>
    )
  }
}
