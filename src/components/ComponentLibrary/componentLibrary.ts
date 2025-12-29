import { ComponentDefinition } from '../../types';

export const componentLibrary: ComponentDefinition[] = [
  {
    type: 'Button',
    label: 'Button',
    icon: '🔘',
    defaultProps: {
      text: 'Click me',
      variant: 'primary',
      size: 'medium',
    },
    propDefinitions: [
      { name: 'text', type: 'text', label: 'Text', defaultValue: 'Click me' },
      { 
        name: 'variant', 
        type: 'select', 
        label: 'Variant', 
        defaultValue: 'primary',
        options: ['primary', 'secondary', 'success', 'danger'] 
      },
      { 
        name: 'size', 
        type: 'select', 
        label: 'Size', 
        defaultValue: 'medium',
        options: ['small', 'medium', 'large'] 
      },
    ],
  },
  {
    type: 'Input',
    label: 'Input',
    icon: '📝',
    defaultProps: {
      placeholder: 'Enter text...',
      label: 'Input Field',
      type: 'text',
    },
    propDefinitions: [
      { name: 'label', type: 'text', label: 'Label', defaultValue: 'Input Field' },
      { name: 'placeholder', type: 'text', label: 'Placeholder', defaultValue: 'Enter text...' },
      { 
        name: 'type', 
        type: 'select', 
        label: 'Type', 
        defaultValue: 'text',
        options: ['text', 'password', 'email', 'number'] 
      },
    ],
  },
  {
    type: 'Card',
    label: 'Card',
    icon: '📄',
    defaultProps: {
      title: 'Card Title',
      content: 'Card content goes here',
      elevation: 'medium',
    },
    propDefinitions: [
      { name: 'title', type: 'text', label: 'Title', defaultValue: 'Card Title' },
      { name: 'content', type: 'text', label: 'Content', defaultValue: 'Card content goes here' },
      { 
        name: 'elevation', 
        type: 'select', 
        label: 'Elevation', 
        defaultValue: 'medium',
        options: ['none', 'low', 'medium', 'high'] 
      },
    ],
  },
  {
    type: 'Container',
    label: 'Container',
    icon: '📦',
    defaultProps: {
      direction: 'column',
      gap: '10',
      padding: '20',
    },
    propDefinitions: [
      { 
        name: 'direction', 
        type: 'select', 
        label: 'Direction', 
        defaultValue: 'column',
        options: ['row', 'column'] 
      },
      { name: 'gap', type: 'number', label: 'Gap (px)', defaultValue: 10 },
      { name: 'padding', type: 'number', label: 'Padding (px)', defaultValue: 20 },
    ],
  },
  {
    type: 'Text',
    label: 'Text',
    icon: '📃',
    defaultProps: {
      content: 'Sample text',
      size: 'medium',
      weight: 'normal',
      color: '#333333',
    },
    propDefinitions: [
      { name: 'content', type: 'text', label: 'Content', defaultValue: 'Sample text' },
      { 
        name: 'size', 
        type: 'select', 
        label: 'Size', 
        defaultValue: 'medium',
        options: ['small', 'medium', 'large', 'xlarge'] 
      },
      { 
        name: 'weight', 
        type: 'select', 
        label: 'Weight', 
        defaultValue: 'normal',
        options: ['normal', 'bold'] 
      },
      { name: 'color', type: 'color', label: 'Color', defaultValue: '#333333' },
    ],
  },
  {
    type: 'Form',
    label: 'Form',
    icon: '📋',
    defaultProps: {
      title: 'Form',
      submitText: 'Submit',
    },
    propDefinitions: [
      { name: 'title', type: 'text', label: 'Title', defaultValue: 'Form' },
      { name: 'submitText', type: 'text', label: 'Submit Button Text', defaultValue: 'Submit' },
    ],
  },
];
