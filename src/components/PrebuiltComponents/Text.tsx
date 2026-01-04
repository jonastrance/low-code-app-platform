import React from 'react';

interface TextProps {
  content: string;
  size: 'small' | 'medium' | 'large' | 'xlarge';
  weight: 'normal' | 'bold';
  color: string;
}

export const Text: React.FC<TextProps> = ({ content, size, weight, color }) => {
  const sizeStyles: Record<string, string> = {
    small: '12px',
    medium: '16px',
    large: '20px',
    xlarge: '28px',
  };

  return (
    <p
      style={{
        fontSize: sizeStyles[size],
        fontWeight: weight,
        color: color,
        margin: '8px 0',
      }}
    >
      {content}
    </p>
  );
};
