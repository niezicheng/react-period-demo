import React from 'react'
import { MyContext } from '../themeContext';

export default class themeButton extends React.PureComponent {
  static contextType = MyContext;

  render() {
    const theme = this.context;
    return (
      <button {...this.props} style={{ border: 'none', background: theme.background }}></button>
    );
  }
}
