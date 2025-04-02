import React from 'react';

export type CardVariant = 'elevated' | 'outlined' | 'filled';

export interface CardProps {
  /**
   * Card variant
   */
  variant?: CardVariant;
  /**
   * Card title
   */
  title?: React.ReactNode;
  /**
   * Card content
   */
  children: React.ReactNode;
  /**
   * Optional footer content
   */
  footer?: React.ReactNode;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Card component for displaying content in a contained format
 */
export const Card = ({
  variant = 'elevated',
  title,
  children,
  footer,
  className = '',
}: CardProps) => {
  // Base classes
  const baseClasses = 'overflow-hidden rounded-lg';
  
  // Variant classes
  const variantClasses = {
    elevated: 'bg-white shadow-md',
    outlined: 'bg-white border border-gray-200',
    filled: 'bg-gray-50',
  };
  
  // Combine classes
  const cardClasses = [
    baseClasses,
    variantClasses[variant],
    className,
  ].join(' ');
  
  return (
    <div className={cardClasses}>
      {title && (
        <div className="px-4 py-3 border-b border-gray-200">
          {typeof title === 'string' ? (
            <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          ) : (
            title
          )}
        </div>
      )}
      <div className="px-4 py-5">{children}</div>
      {footer && (
        <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
          {footer}
        </div>
      )}
    </div>
  );
};