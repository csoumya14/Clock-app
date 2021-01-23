import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './Themes/ThemeVariable';
import GlobalStyle from './Themes/GlobalStyle';

import Provider from './Context';
import Main from './Components/Main';
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider>
        <Main />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
