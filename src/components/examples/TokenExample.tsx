import React from 'react';

type TokenExampleProps = {
  variant?: 'primary' | 'success' | 'warning' | 'error' | 'info';
  size?: 'small' | 'medium' | 'large';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  children: React.ReactNode;
};

/**
 * Componente de exemplo que demonstra o uso dos tokens do design system
 */
export const TokenExample = ({
  variant = 'primary',
  size = 'medium',
  rounded = 'md',
  children
}: TokenExampleProps) => {
  // Mapeamento de variantes para classes de cores
  const variantClasses = {
    primary: 'bg-primary-500 text-neutral-50',
    success: 'bg-success-500 text-neutral-50',
    warning: 'bg-warning-500 text-neutral-900',
    error: 'bg-error-500 text-neutral-50',
    info: 'bg-info-500 text-neutral-50'
  };

  // Mapeamento de tamanhos para classes de padding
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  };

  // Mapeamento de arredondamento para classes de border-radius
  const roundedClasses = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full'
  };

  return (
    <div className={`
      ${variantClasses[variant]}
      ${sizeClasses[size]}
      ${roundedClasses[rounded]}
      shadow-md
      transition-all duration-300 ease-fluid
      hover:shadow-lg
      font-body
      font-weight-medium
    `}>
      {children}
    </div>
  );
};