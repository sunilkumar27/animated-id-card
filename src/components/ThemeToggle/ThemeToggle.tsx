//ThemeToggle.tsx

import { Text } from '@mantine/core';
import { ThemeType } from '../../styles/theme';
import './ThemeToggle.css';

interface ThemeToggleProps {
  value: ThemeType;
  onChange: (value: ThemeType) => void;
}

export const ThemeToggle = ({ value, onChange }: ThemeToggleProps) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <Text 
        size="sm" 
        style={{ 
          color: value === 'pullpo' ? '#e9b207' : '#666666',
          fontWeight: value === 'pullpo' ? 600 : 400
        }}
      >
        Pullpo
      </Text>
      
      <div className="toggle-switch">
        <input
          type="checkbox"
          className="checkbox"
          id="theme-toggle"
          checked={value === 'opire'}
          onChange={(e) => onChange(e.target.checked ? 'opire' : 'pullpo')}
        />
        <label className="label" htmlFor="theme-toggle">
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>

      <Text 
        size="sm" 
        style={{ 
          color: value === 'opire' ? '#e9b207' : '#666666',
          fontWeight: value === 'opire' ? 600 : 400
        }}
      >
        Opire
      </Text>
    </div>
  );
};