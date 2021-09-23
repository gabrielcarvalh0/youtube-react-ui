
import React, {useState} from 'react';

import {  ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core';
import Home from './home';


const useStyles= makeStyles({
  root:{
    background: 'red',
    height: '100vh'
  }
})

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createMuiTheme({
palette: {
  type: darkMode ? 'dark' : 'light',
   primary:{
     main: '#f44336'
   },
   secondary:{
     main: '#3f51b5'
   }, 
   background:{
     default: darkMode ? '#232323' : '#fff',
     dark: darkMode ? '#181818' : '#f4f6f8',
     paper: darkMode ? '#232323' : '#fff'
   }
}
  });


  const classes = useStyles();

  
  return (
    <ThemeProvider theme={theme}>
 <Home darkMode={darkMode} setDarkMode={setDarkMode}></Home>

    </ThemeProvider>
  );
}

export default App;
