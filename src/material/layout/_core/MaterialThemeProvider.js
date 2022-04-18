import React from "react";
import {createTheme,ThemeProvider} from "@mui/material";
import { StylesProvider , jssPreset} from '@mui/styles';
import { create } from 'jss';
import rtl from 'jss-rtl';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const theme = createTheme(

  {
    direction: "rtl",
    typography: {
      fontFamily: ["iransans"].join(",")
    },
    // palette: {
    //   primary: {
    //     main: "#17c191",
    //     contrastText: "#fff" 
    //   },
    //   secondary: {
    //     main: "#ba000d",
    //   },
    //   error: {
    //     main: "#f018a6",
    //     contrastText: "#fff",
    //     textTheadTable:"#fff"
    //   }
    // },
  }
);

export function MaterialThemeProvider(props) {
  const { children } = props;
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider jss={jss}>
        {children}
      </StylesProvider>
    </ThemeProvider>
  );
}
