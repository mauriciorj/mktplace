import React from 'react';
import './button.css';
import { Button as BaseButton } from 'antd';

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <BaseButton
      type="primary"
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </BaseButton>
  );
};
