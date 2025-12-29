import React from 'react';

interface ContainerProps {
  direction: 'row' | 'column';
  gap: number;
  padding: number;
  children?: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ direction, gap, padding, children }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: direction,
        gap: `${gap}px`,
        padding: `${padding}px`,
        border: '2px dashed #ddd',
        borderRadius: '4px',
        minHeight: '100px',
        backgroundColor: '#fafafa',
      }}
    >
      {children}
    </div>
  );
};
