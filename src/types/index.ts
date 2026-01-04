export interface ComponentInstance {
  id: string;
  type: string;
  props: Record<string, any>;
  children: ComponentInstance[];
  style?: React.CSSProperties;
}

export interface ComponentDefinition {
  type: string;
  label: string;
  icon: string;
  defaultProps: Record<string, any>;
  propDefinitions: PropDefinition[];
}

export interface PropDefinition {
  name: string;
  type: 'text' | 'number' | 'boolean' | 'select' | 'color';
  label: string;
  defaultValue: any;
  options?: string[];
}

export interface DragItem {
  type: string;
  componentType: string;
  id?: string;
}
