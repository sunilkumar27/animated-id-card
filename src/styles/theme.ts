//styles/theme.ts

export type ThemeType = 'pullpo' | 'opire';

export interface ThemeColors {
  gradient: {
    from: string;
    to: string;
  };
  borderGradient: string;
  text: {
    title: string;
    subtitle: string;
    stats: string;
    social: string;
    poweredBy: string;
  };
  shadow: string;
}

export interface ThemeConfig {
  pullpo: ThemeColors;
  opire: ThemeColors;
}

export const themes: ThemeConfig = {
  pullpo: {
    gradient: {
      from: '#171438',
      to: '#830001'
    },
    borderGradient: 'linear-gradient(90deg, #80c8ff 0%, #171438 33%, #830001 66%, #80c8ff 100%)',
    text: {
      title: '#e9b207',
      subtitle: '#b38705',
      stats: '#80c8ff',
      social: '#b197fc',
      poweredBy: '#666666'
    },
    shadow: '0 8px 32px rgba(233, 178, 7, 0.4)'
  },
  opire: {
    gradient: {
      from: '#1A1A1A',
      to: '#004443'
    },
    borderGradient: 'linear-gradient(90deg, #B197FC 0%, #051310 33%, #004443 66%, #B197FC 100%)',
    text: {
      title: '#C4B454',
      subtitle: '#C4B454',
      stats: '#F3CFC6',
      social: '#80c8ff',
      poweredBy: '#666666'
    },
    shadow: '0 8px 32px rgba(233, 178, 7, 0.4)'
  }
};