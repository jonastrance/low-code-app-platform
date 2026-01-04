import React from 'react';
import { ComponentInstance } from '../../types';
import * as PrebuiltComponents from '../PrebuiltComponents';

interface CanvasComponentProps {
  component: ComponentInstance;
  isSelected: boolean;
  onSelect: (id: string | null) => void;
  onDelete: (id: string) => void;
}

export const CanvasComponent: React.FC<CanvasComponentProps> = ({
  component,
  isSelected,
  onSelect,
  onDelete,
}) => {
  const Component = (PrebuiltComponents as any)[component.type];

  if (!Component) {
    return <div>Unknown component: {component.type}</div>;
  }

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelect(component.id);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete(component.id);
  };

  return (
    <div
      className={`canvas-component ${isSelected ? 'selected' : ''}`}
      onClick={handleClick}
      style={{ position: 'relative', marginBottom: '16px' }}
    >
      <Component {...component.props}>
        {component.children.map((child) => (
          <CanvasComponent
            key={child.id}
            component={child}
            isSelected={child.id === component.id}
            onSelect={onSelect}
            onDelete={onDelete}
          />
        ))}
      </Component>
      
      {isSelected && (
        <div className="component-controls">
          <button className="delete-button" onClick={handleDelete}>
            🗑️ Delete
          </button>
        </div>
      )}
    </div>
  );
};
