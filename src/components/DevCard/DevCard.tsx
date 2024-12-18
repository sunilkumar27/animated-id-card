import React from 'react';
import { Paper, Text } from '@mantine/core';
import { DevCardProps } from './DevCard.types';
import { DevCardAvatar } from './DevCardAvatar';
import { DevCardSocial } from './DevCardSocial';
import { DevCardStats } from './DevCardStats';
import { DevCardSkeleton } from './DevCardSkeleton';
import { themes } from '../../styles/theme';
import { FONT_SIZES, SPACING } from '../../styles/constants';

/**
 * Main DevCard component
 * Displays developer information in a stylized card format
 */
export const DevCard = React.memo(({ 
  userInfo, 
  stats, 
  socialLinks, 
  themeType,
  isLoading,
  className
}: DevCardProps) => {
  const currentTheme = themes[themeType];
  const [animationKey, setAnimationKey] = React.useState(0);

  React.useEffect(() => {
    setAnimationKey(prev => prev + 1);
  }, [themeType]);

  if (isLoading) {
    return <DevCardSkeleton />;
  }

  return (
    <Paper
      radius="xl"
      style={{
        background: `linear-gradient(to right, ${currentTheme.gradient.from}, ${currentTheme.gradient.to})`,
        boxShadow: currentTheme.shadow,
        width: '500px',
        padding: SPACING.md,
        fontFamily: "'Inter', sans-serif",
        borderRadius: '24px',
        position: 'relative',
        overflow: 'hidden'
      }}
      className={className}
      data-testid="dev-card"
      role="article"
      aria-label={`Developer card for ${userInfo.name}`}
    >
      {/* Animated border gradient */}
      <div 
        key={animationKey}
        style={{
          position: 'absolute',
          inset: 0,
          padding: '3px',
          borderRadius: '24px',
          background: currentTheme.borderGradient,
          backgroundSize: '300% 100%',
          animation: 'moveGradient 15s linear infinite',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          zIndex: 0
        }}
      />

      <div style={{ 
        position: 'relative', 
        zIndex: 1,
        display: 'flex',
        justifyContent: 'space-between',
        paddingLeft: '2px'
      }}>
        {/* Left Section */}
        <div style={{ 
          display: 'flex',
          flexDirection: 'column',
          gap: SPACING.xxs,
          width: '65%'
        }}>
          {/* Name and Role */}
          <div>
            <Text 
              fw={700} 
              style={{ 
                color: currentTheme.text.title,
                fontSize: '1.5rem',
                marginBottom: '0.125rem'
              }}
            >
              {userInfo.name}
            </Text>
            <Text 
              style={{ 
                color: currentTheme.text.subtitle,
                fontSize: '0.875rem'
              }}
            >
              {userInfo.role}
            </Text>
          </div>

          {/* Stats */}
          <DevCardStats stats={stats} theme={currentTheme} />

          {/* Social Icons */}
          <DevCardSocial links={socialLinks} themeType={themeType} />
        </div>

        {/* Right Section */}
        <div style={{ 
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '30%'
        }}>
          <DevCardAvatar
            avatarUrl={userInfo.avatarUrl}
            initials={userInfo.initials}
            alt={userInfo.name}
            themeType={themeType}
          />
          <Text 
            size="xs" 
            style={{ 
              color: currentTheme.text.poweredBy,
              textAlign: 'center',
              fontSize: FONT_SIZES.sm
            }}
          >
            Powered by Opire
          </Text>
        </div>
      </div>
    </Paper>
  );
});

DevCard.displayName = 'DevCard';