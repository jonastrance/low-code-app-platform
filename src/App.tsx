import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { v4 as uuidv4 } from 'uuid';
import { ComponentLibrary } from './components/ComponentLibrary/ComponentLibrary';
import { Canvas } from './components/Canvas/Canvas';
import { PropertyEditor } from './components/PropertyEditor/PropertyEditor';
import { ComponentInstance } from './types';
import { componentLibrary } from './components/ComponentLibrary/componentLibrary';
import './App.css';

function App() {
  const [components, setComponents] = useState<ComponentInstance[]>([]);
  const [selectedComponentId, setSelectedComponentId] = useState<string | null>(null);
  const [previewMode, setPreviewMode] = useState(false);

  const handleAddComponent = (componentType: string) => {
    const componentDef = componentLibrary.find((c) => c.type === componentType);
    if (!componentDef) return;

    const newComponent: ComponentInstance = {
      id: uuidv4(),
      type: componentType,
      props: { ...componentDef.defaultProps },
      children: [],
    };

    setComponents([...components, newComponent]);
    setSelectedComponentId(newComponent.id);
  };

  const handleUpdateComponent = (id: string, newProps: Record<string, any>) => {
    setComponents(
      components.map((c) =>
        c.id === id ? { ...c, props: newProps } : c
      )
    );
  };

  const handleDeleteComponent = (id: string) => {
    setComponents(components.filter((c) => c.id !== id));
    if (selectedComponentId === id) {
      setSelectedComponentId(null);
    }
  };

  const handleExport = () => {
    const dataStr = JSON.stringify(components, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    const exportFileDefaultName = 'low-code-design.json';

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target?.result as string);
        setComponents(imported);
        setSelectedComponentId(null);
      } catch (error) {
        alert('Invalid JSON file');
      }
    };
    reader.readAsText(file);
  };

  const selectedComponent = components.find((c) => c.id === selectedComponentId) || null;

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">🚀 Low-Code Platform</h1>
          <div className="header-controls">
            <button className="header-button" onClick={() => setPreviewMode(!previewMode)}>
              {previewMode ? '✏️ Edit' : '👁️ Preview'}
            </button>
            <button className="header-button" onClick={handleExport}>
              💾 Export
            </button>
            <label className="header-button">
              📂 Import
              <input
                type="file"
                accept=".json"
                onChange={handleImport}
                style={{ display: 'none' }}
              />
            </label>
          </div>
        </header>

        <div className="app-content">
          {!previewMode && <ComponentLibrary />}
          <Canvas
            components={components}
            selectedComponentId={selectedComponentId}
            onAddComponent={handleAddComponent}
            onSelectComponent={setSelectedComponentId}
            onDeleteComponent={handleDeleteComponent}
          />
          {!previewMode && (
            <PropertyEditor
              selectedComponent={selectedComponent}
              onUpdateComponent={handleUpdateComponent}
            />
          )}
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
