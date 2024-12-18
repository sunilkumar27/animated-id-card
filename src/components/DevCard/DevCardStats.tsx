import React from 'react';
import { Text } from '@mantine/core';
import { UserStats } from './DevCard.types';
import { ThemeColors } from '../../styles/theme';
import { SPACING } from '../../styles/constants';

interface DevCardStatsProps {
  stats: UserStats;
  theme: ThemeColors;
}

/**
 * Component for displaying developer statistics
 * Memoized to prevent unnecessary re-renders
 */
export const DevCardStats = React.memo(({ stats, theme }: DevCardStatsProps) => {
  return (
    <div 
      style={{ 
        display: 'grid',
        gridTemplateColumns: 'auto 120px',
        gap: SPACING.tiny
      }}
      data-testid="dev-card-stats"
    >
      {[
        ['Issues Resolved', stats.issuesResolved],
        ['Bounties Earned', `$${stats.bountiesEarned}`],
        ['Challenges Won', stats.challengesWon]
      ].map(([label, value]) => (
        <React.Fragment key={label}>
          <Text style={{ color: theme.text.stats }}>
            {label}
          </Text>
          <Text style={{ 
            color: theme.text.stats, 
            textAlign: 'right' 
          }}>
            {value}
          </Text>
        </React.Fragment>
      ))}
    </div>
  );
});

DevCardStats.displayName = 'DevCardStats';