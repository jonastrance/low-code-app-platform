import React from 'react';

interface ButtonProps {
  text: string;
  variant: 'primary' | 'secondary' | 'success' | 'danger';
  size: 'small' | 'medium' | 'large';
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text, variant, size, onClick }) => {
  const baseStyles: React.CSSProperties = {
    padding: size === 'small' ? '6px 12px' : size === 'large' ? '14px 28px' : '10px 20px',
    fontSize: size === 'small' ? '12px' : size === 'large' ? '18px' : '14px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: { backgroundColor: '#007bff', color: '#fff' },
    secondary: { backgroundColor: '#6c757d', color: '#fff' },
    success: { backgroundColor: '#28a745', color: '#fff' },
    danger: { backgroundColor: '#dc3545', color: '#fff' },
  };

  return (
    <button style={{ ...baseStyles, ...variantStyles[variant] }} onClick={onClick}>
      {text}
    </button>
  );
};
