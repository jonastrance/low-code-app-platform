import React from 'react';
import { useDrag } from 'react-dnd';
import { componentLibrary } from './componentLibrary';
import { DragItem } from '../../types';
import './ComponentLibrary.css';

interface DraggableComponentProps {
  type: string;
  label: string;
  icon: string;
}

const DraggableComponent: React.FC<DraggableComponentProps> = ({ type, label, icon }) => {
  const [{ isDragging }, drag] = useDrag<DragItem, void, { isDragging: boolean }>(() => ({
    type: 'COMPONENT',
    item: { type: 'COMPONENT', componentType: type },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag as any}
      className="draggable-component"
      style={{
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      <span className="component-icon">{icon}</span>
      <span className="component-label">{label}</span>
    </div>
  );
};

export const ComponentLibrary: React.FC = () => {
  return (
    <div className="component-library">
      <h3 className="library-title">Components</h3>
      <div className="components-grid">
        {componentLibrary.map((component) => (
          <DraggableComponent
            key={component.type}
            type={component.type}
            label={component.label}
            icon={component.icon}
          />
        ))}
      </div>
    </div>
  );
};
