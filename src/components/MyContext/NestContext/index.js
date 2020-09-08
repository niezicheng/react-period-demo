import React, { Component } from 'react';
import { MyContext, themes } from './themeContext';
import ThemeButton from './themeButton';

export default class NestContext extends Component {
  constructor(props) {
    super(props)

    this.changeTheme = () => {
      this.setState(prevState => ({
        theme: prevState.theme === themes.dark ? themes.light : themes.dark,
      }))
    }

    this.state = {
      theme: themes.light,
      changeTheme: this.changeTheme,
    }
  }

  render() {
    return (
      <MyContext.Provider value={this.state}>
        <ThemeButton />
      </MyContext.Provider>
    )
  }
}
