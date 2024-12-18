import React from 'react';
import { ActionIcon } from '@mantine/core';
import { SocialLinks } from './DevCard.types';
import { themes, ThemeType } from '../../styles/theme';
import { SPACING } from '../../styles/constants';

interface DevCardSocialProps {
  links?: SocialLinks;
  themeType: ThemeType;
}

/**
 * Social media icons components
 */
const Icons = {
  GitHub: React.memo(() => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  )),
  LinkedIn: React.memo(() => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )),
  X: React.memo(() => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ))
};

/**
 * Social media links component
 * Displays social media icons with links
 */
export const DevCardSocial = React.memo(({ links, themeType }: DevCardSocialProps) => {
  const currentTheme = themes[themeType];

  if (!links) return null;

  return (
    <div 
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, auto)',
        gap: SPACING.xl,
        justifyContent: 'start'
      }}
      data-testid="dev-card-social"
    >
      {links.github && (
        <ActionIcon
          component="a"
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          variant="transparent"
          size="lg"
          style={{ color: currentTheme.text.social }}
          aria-label="GitHub Profile"
        >
          <Icons.GitHub />
        </ActionIcon>
      )}
      {links.linkedin && (
        <ActionIcon
          component="a"
          href={links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          variant="transparent"
          size="lg"
          style={{ color: currentTheme.text.social }}
          aria-label="LinkedIn Profile"
        >
          <Icons.LinkedIn />
        </ActionIcon>
      )}
      {links.x && (
        <ActionIcon
          component="a"
          href={links.x}
          target="_blank"
          rel="noopener noreferrer"
          variant="transparent"
          size="lg"
          style={{ color: currentTheme.text.social }}
          aria-label="X Profile"
        >
          <Icons.X />
        </ActionIcon>
      )}
    </div>
  );
});

DevCardSocial.displayName = 'DevCardSocial';