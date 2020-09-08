import React, { Component } from 'react';
import { MyContext } from '../themeContext';

export default class ThemeButton extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {({theme, changeTheme}) => {
          return (
            <button onClick={changeTheme} style={{ border: 'none', background: theme.background }}>
              changeTheme
            </button>
          )
        }}
      </MyContext.Consumer>
    )
  }
}
