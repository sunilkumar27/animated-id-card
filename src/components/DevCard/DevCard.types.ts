/**
 * Supported theme types for the DevCard
 */
export type ThemeType = 'pullpo' | 'opire';

/**
 * Developer skill levels
 */
export type SkillLevel = 'Beginner' | 'Pro' | 'Expert';

/**
 * Developer information
 */
export interface UserInfo {
  id: string;
  name: string;
  role: string;
  level: SkillLevel;
  avatarUrl?: string;
  initials: string;
}

/**
 * Developer statistics
 */
export interface UserStats {
  issuesResolved: number;
  bountiesEarned: number;
  challengesWon: number;
}

/**
 * Social media links
 */
export interface SocialLinks {
  github?: string;
  x?: string;
  linkedin?: string;
}

/**
 * Props for the DevCard component
 */
export interface DevCardProps {
  userInfo: UserInfo;
  stats: UserStats;
  socialLinks?: SocialLinks;
  themeType: ThemeType;
  isLoading?: boolean;
  className?: string;
}