import React from 'react';
import { ComponentInstance } from '../../types';
import { componentLibrary } from '../ComponentLibrary/componentLibrary';
import './PropertyEditor.css';

interface PropertyEditorProps {
  selectedComponent: ComponentInstance | null;
  onUpdateComponent: (id: string, props: Record<string, any>) => void;
}

export const PropertyEditor: React.FC<PropertyEditorProps> = ({
  selectedComponent,
  onUpdateComponent,
}) => {
  if (!selectedComponent) {
    return (
      <div className="property-editor">
        <h3 className="editor-title">Properties</h3>
        <div className="no-selection">Select a component to edit its properties</div>
      </div>
    );
  }

  const componentDef = componentLibrary.find((c) => c.type === selectedComponent.type);
  
  if (!componentDef) {
    return (
      <div className="property-editor">
        <h3 className="editor-title">Properties</h3>
        <div className="no-selection">Unknown component type</div>
      </div>
    );
  }

  const handlePropChange = (propName: string, value: any) => {
    onUpdateComponent(selectedComponent.id, {
      ...selectedComponent.props,
      [propName]: value,
    });
  };

  return (
    <div className="property-editor">
      <h3 className="editor-title">Properties</h3>
      <div className="component-type-label">
        {componentDef.icon} {componentDef.label}
      </div>
      
      <div className="properties-list">
        {componentDef.propDefinitions.map((propDef) => {
          const currentValue = selectedComponent.props[propDef.name] ?? propDef.defaultValue;

          return (
            <div key={propDef.name} className="property-field">
              <label className="property-label">{propDef.label}</label>
              
              {propDef.type === 'text' && (
                <input
                  type="text"
                  value={currentValue}
                  onChange={(e) => handlePropChange(propDef.name, e.target.value)}
                  className="property-input"
                />
              )}
              
              {propDef.type === 'number' && (
                <input
                  type="number"
                  value={currentValue}
                  onChange={(e) => handlePropChange(propDef.name, parseInt(e.target.value))}
                  className="property-input"
                />
              )}
              
              {propDef.type === 'boolean' && (
                <input
                  type="checkbox"
                  checked={currentValue}
                  onChange={(e) => handlePropChange(propDef.name, e.target.checked)}
                  className="property-checkbox"
                />
              )}
              
              {propDef.type === 'select' && propDef.options && (
                <select
                  value={currentValue}
                  onChange={(e) => handlePropChange(propDef.name, e.target.value)}
                  className="property-select"
                >
                  {propDef.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              )}
              
              {propDef.type === 'color' && (
                <input
                  type="color"
                  value={currentValue}
                  onChange={(e) => handlePropChange(propDef.name, e.target.value)}
                  className="property-color"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
