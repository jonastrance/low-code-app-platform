import React from 'react';

interface InputProps {
  label: string;
  placeholder: string;
  type: 'text' | 'password' | 'email' | 'number';
  onChange?: (value: string) => void;
}

export const Input: React.FC<InputProps> = ({ label, placeholder, type, onChange }) => {
  return (
    <div style={{ marginBottom: '16px' }}>
      <label style={{ display: 'block', marginBottom: '6px', fontWeight: '500', color: '#333' }}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          border: '1px solid #ddd',
          borderRadius: '4px',
          fontSize: '14px',
          boxSizing: 'border-box',
        }}
      />
    </div>
  );
};
