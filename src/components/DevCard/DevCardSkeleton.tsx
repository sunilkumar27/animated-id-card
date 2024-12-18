import { Paper, Skeleton } from '@mantine/core';
import { SPACING } from '../../styles/constants';

/**
 * Loading skeleton for the DevCard
 * Displays a placeholder UI while content is loading
 */
export const DevCardSkeleton = () => {
  return (
    <Paper
      radius="xl"
      style={{
        width: '500px',
        padding: SPACING.md,
        backgroundColor: 'rgba(0, 0, 0, 0.1)'
      }}
      data-testid="dev-card-skeleton"
    >
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '70%' }}>
          {/* Name and role skeletons */}
          <Skeleton height={24} width="60%" mb={SPACING.xs} />
          <Skeleton height={16} width="40%" mb={SPACING.md} />
          
          {/* Stats skeletons */}
          {[...Array(3)].map((_, i) => (
            <div 
              key={i}
              style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                marginBottom: SPACING.xs 
              }}
            >
              <Skeleton height={16} width="40%" />
              <Skeleton height={16} width="20%" />
            </div>
          ))}
          
          {/* Social icons skeleton */}
          <div style={{ 
            display: 'flex',
            gap: SPACING.sm,
            marginTop: SPACING.md 
          }}>
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} height={24} width={24} circle />
            ))}
          </div>
        </div>
        
        {/* Avatar skeleton */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Skeleton height={80} width={80} circle mb={SPACING.sm} />
          <Skeleton height={12} width={80} />
        </div>
      </div>
    </Paper>
  );
};