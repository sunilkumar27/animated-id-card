import React from 'react';
import { Box } from '@mantine/core';
import { themes, ThemeType } from '../../styles/theme';

interface DevCardAvatarProps {
  avatarUrl?: string;
  initials: string;
  alt: string;
  themeType: ThemeType;
}

/**
 * Avatar component for the DevCard
 * Displays either an image or initials with a gradient border
 */
export const DevCardAvatar = React.memo(({
  avatarUrl,
  initials,
  alt,
  themeType
}: DevCardAvatarProps) => {
  const currentTheme = themes[themeType];

  return (
    <Box 
      style={{ position: 'relative' }}
      data-testid="dev-card-avatar"
    >
      <Box
        style={{
          width: 80,
          height: 80,
          borderRadius: '50%',
          padding: 2,
          background: `linear-gradient(45deg, ${currentTheme.gradient.from}, ${currentTheme.gradient.to})`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Box
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            overflow: 'hidden',
            background: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt={alt}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          ) : (
            <span style={{
              color: currentTheme.text.title,
              fontSize: '1.5rem',
              fontWeight: 600
            }}>
              {initials}
            </span>
          )}
        </Box>
      </Box>
    </Box>
  );
});

DevCardAvatar.displayName = 'DevCardAvatar';