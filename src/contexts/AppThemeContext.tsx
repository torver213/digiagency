'use client';
import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import type {} from '@mui/material/themeCssVarsAugmentation';
import { CssBaseline } from '@mui/material';

const AppThemeContext = (props: any) => {

const theme = createTheme({
  colorSchemes: { light: true, dark: true },
  cssVariables: {
    colorSchemeSelector: 'class'
  }
});

  return (
    <ThemeProvider theme={theme} disableTransitionOnChange>
      <CssBaseline />
        {props.children}
    </ThemeProvider>
  )
}

export default AppThemeContext