import React from 'react';
import { Box } from '@mantine/core';
import { DevCard } from './components/DevCard/DevCard';
import { ThemeToggle } from './components/ThemeToggle/ThemeToggle';
import { ThemeType } from './styles/theme';
import { ErrorBoundary } from './components/ErrorBoundary';
import './components/ThemeToggle/ThemeToggle.css';

const exampleProfile = {
  userInfo: {
    id: '1',
    name: 'Sunil Kumar Chenna',
    role: 'Full Stack Developer',
    level: 'Pro' as const,
    initials: 'SC',
  },
  stats: {
    issuesResolved: 120,
    bountiesEarned: 5400,
    challengesWon: 8,
  },
  socialLinks: {
    github: 'https://github.com/johndoe',
    x: 'https://twitter.com/johndoe',
    linkedin: 'https://linkedin.com/in/johndoe'
  },
};

export const App = () => {
  const [themeType, setThemeType] = React.useState<ThemeType>('pullpo');

  return (
    <Box 
      style={{ 
        minHeight: '100vh',
        margin: 0,
        padding: '20px',
        backgroundColor: '#0a0a0a',
      }}
    >
      <Box 
        style={{ 
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 1000
        }}
      >
        <ThemeToggle value={themeType} onChange={setThemeType} />
      </Box>
      <Box 
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh'
        }}
      >
        <ErrorBoundary>
          <DevCard {...exampleProfile} themeType={themeType} />
        </ErrorBoundary>
      </Box>
    </Box>
  );
};