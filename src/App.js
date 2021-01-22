import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './Themes/ThemeVariable';
import GlobalStyle from './Themes/GlobalStyle';
import axios from 'axios';
import Provider from './Context';
import Main from './Components/Main';
const App = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    console.log('effect');
    axios.get('https://freegeoip.app/json/').then((response) => {
      console.log('promise fulfiled');
      setInfo(response.data);
    });
  }, []);

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
