import React from 'react';
import { useDrop } from 'react-dnd';
import { ComponentInstance, DragItem } from '../../types';
import { CanvasComponent } from './CanvasComponent';
import './Canvas.css';

interface CanvasProps {
  components: ComponentInstance[];
  selectedComponentId: string | null;
  onAddComponent: (componentType: string) => void;
  onSelectComponent: (id: string | null) => void;
  onDeleteComponent: (id: string) => void;
}

export const Canvas: React.FC<CanvasProps> = ({
  components,
  selectedComponentId,
  onAddComponent,
  onSelectComponent,
  onDeleteComponent,
}) => {
  const [{ isOver }, drop] = useDrop<DragItem, void, { isOver: boolean }>(() => ({
    accept: 'COMPONENT',
    drop: (item: DragItem) => {
      if (!item.id) {
        // New component from library
        onAddComponent(item.componentType);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div className="canvas-container">
      <div className="canvas-toolbar">
        <h2 className="canvas-title">Canvas</h2>
        <button
          className="clear-button"
          onClick={() => {
            if (window.confirm('Clear all components?')) {
              components.forEach(c => onDeleteComponent(c.id));
            }
          }}
        >
          Clear All
        </button>
      </div>
      
      <div
        ref={drop as any}
        className={`canvas ${isOver ? 'canvas-drag-over' : ''}`}
      >
        {components.length === 0 ? (
          <div className="canvas-empty">
            <p>Drag and drop components here to start building</p>
          </div>
        ) : (
          <div className="canvas-content">
            {components.map((component) => (
              <CanvasComponent
                key={component.id}
                component={component}
                isSelected={component.id === selectedComponentId}
                onSelect={onSelectComponent}
                onDelete={onDeleteComponent}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
