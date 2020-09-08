import React from 'react';

export const themes = {
  dark: {
    background: '#333333',
  },
  light: {
    background: '#CCCCCC',
  }
}

export const MyContext = React.createContext({
  theme: themes.dark,
  changeTheme: () => {},
});

