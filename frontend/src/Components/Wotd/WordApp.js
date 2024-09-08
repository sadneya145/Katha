import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../Wotd/Theme'; // Adjust the path as needed
import Header from './Header';
import ButtonNav from './ButtonNav';
import InputBox from './InputBox';

function Word() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        <ButtonNav />
        <InputBox />
      </div>
    </ThemeProvider>
  );
}

export default Word;
