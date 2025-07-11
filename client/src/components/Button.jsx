import React from 'react';

const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',        
  disabled = false,
  className = '',     // Allow custom classes
  ...rest             // Pass any other props like data-testid
}) => {
  // Base classes
  let classes = 'btn';

  // Variant classes
  classes += ` btn-${variant}`;

  // Size classes
  classes += ` btn-${size}`;

  // Disabled class
  if (disabled) {
    classes += ' btn-disabled';
  }

  // Combine with any custom classes passed in props
  if (className) {
    classes += ` ${className}`;
  }

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...rest} // Spread the rest of the props here
    >
      {children}
    </button>
  );
};

export default Button;