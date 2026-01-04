import React from 'react';

interface CardProps {
  title: string;
  content: string;
  elevation: 'none' | 'low' | 'medium' | 'high';
}

export const Card: React.FC<CardProps> = ({ title, content, elevation }) => {
  const elevationStyles: Record<string, string> = {
    none: '0 0 0 rgba(0,0,0,0)',
    low: '0 1px 3px rgba(0,0,0,0.12)',
    medium: '0 4px 6px rgba(0,0,0,0.16)',
    high: '0 10px 20px rgba(0,0,0,0.19)',
  };

  return (
    <div
      style={{
        padding: '20px',
        borderRadius: '8px',
        backgroundColor: '#fff',
        boxShadow: elevationStyles[elevation],
        border: elevation === 'none' ? '1px solid #ddd' : 'none',
      }}
    >
      <h3 style={{ marginTop: 0, marginBottom: '12px', color: '#333' }}>{title}</h3>
      <p style={{ margin: 0, color: '#666', lineHeight: '1.6' }}>{content}</p>
    </div>
  );
};
