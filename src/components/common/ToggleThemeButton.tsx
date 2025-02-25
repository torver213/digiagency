'use client'
import { IconButton } from '@mui/material'
import React from 'react'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useColorScheme } from '@mui/material/styles';

export const ToggleThemeButton = () => {
    const { mode, setMode } = useColorScheme();

  return (
   <React.Fragment>
    <select
      value={mode}
      onChange={(event) => {
        setMode(event.target.value as any);
        // For TypeScript, cast `event.target.value as 'light' | 'dark' | 'system'`:
      }}
    >
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
        {/* <IconButton></IconButton> */}
   </React.Fragment>
  )
}
