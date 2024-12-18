//main.tsx

import React from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { App } from './App';
import './main.css';

const defaultTheme = {
  primaryColor: 'violet',
  colors: {
    dark: [
      '#C1C2C5',
      '#A6A7AB',
      '#909296',
      '#5C5F66',
      '#373A40',
      '#2C2E33',
      '#25262B',
      '#1A1B1E',
      '#141517',
      '#101113'
    ] as const,
    violet: [
      '#f1e9ff',
      '#e2d2ff',
      '#c7adff',
      '#ab85ff',
      '#915bff',
      '#7934ff',
      '#6311ff',
      '#5000db',
      '#4000b0',
      '#310088'
    ] as const
  },
  radius: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '20px'
  },
  black: '#000000',
  white: '#ffffff'
};

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme="dark" theme={defaultTheme}>
      <App />
    </MantineProvider>
  </React.StrictMode>
);