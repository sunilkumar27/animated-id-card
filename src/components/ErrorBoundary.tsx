import { Component, ErrorInfo, ReactNode } from 'react';
import { Paper, Text, Button } from '@mantine/core';

/**
 * Props for the ErrorBoundary component
 * @property {ReactNode} children - Components to be wrapped by the error boundary
 * @property {ReactNode} [fallback] - Optional custom error UI to display when an error occurs
 */
interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

/**
 * State interface for the ErrorBoundary
 * @property {boolean} hasError - Indicates whether an error has occurred
 * @property {Error} [error] - The error object if one was caught
 */
interface State {
  hasError: boolean;
  error?: Error;
}

/**
 * ErrorBoundary Component
 * 
 * Catches JavaScript errors anywhere in their child component tree,
 * logs those errors, and displays a fallback UI instead of the component
 * tree that crashed.
 * 
 * @example
 * ```tsx
 * <ErrorBoundary fallback={<CustomErrorUI />}>
 *   <MyComponent />
 * </ErrorBoundary>
 * ```
 */
export class ErrorBoundary extends Component<Props, State> {
  // Initialize state
  public state: State = {
    hasError: false
  };

  /**
   * Static method called when an error occurs during rendering
   * Used to update the component's state based on the caught error
   * 
   * @param {Error} error - The error that was caught
   * @returns {State} New state object with error information
   */
  public static getDerivedStateFromError(error: Error): State {
    return { 
      hasError: true,
      error 
    };
  }

  /**
   * Lifecycle method called when an error is caught
   * Used for logging error information
   * 
   * @param {Error} error - The error that was caught
   * @param {ErrorInfo} errorInfo - Additional information about the error
   */
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log the error to an error reporting service
    console.error('Uncaught error:', error, errorInfo);
  }

  /**
   * Handler to reset the error state
   * Allows users to attempt to recover from the error
   */
  private handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  /**
   * Renders either the error UI when an error occurs,
   * or the children when there's no error
   */
  public render() {
    if (this.state.hasError) {
      // Return custom fallback UI if provided, otherwise show default error UI
      return this.props.fallback || (
        <Paper p="md" radius="md" style={{ textAlign: 'center' }}>
          <Text size="lg" fw={500} mb="md">Something went wrong</Text>
          <Text size="sm" c="dimmed" mb="xl">
            {this.state.error?.message || 'An unexpected error occurred'}
          </Text>
          <Button onClick={this.handleReset}>
            Try Again
          </Button>
        </Paper>
      );
    }

    // When there's no error, render children normally
    return this.props.children;
  }
}