import React from 'react';

export const themes = {
  light: {
    background: '#CCCCCC',
  },
  dark: {
    background: '#333333',
  },
}

export const MyContext = React.createContext(themes.dark);
