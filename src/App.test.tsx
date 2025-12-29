import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Mock react-dnd to avoid ESM issues in Jest
jest.mock('react-dnd', () => ({
  DndProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  useDrag: () => [{ isDragging: false }, jest.fn()],
  useDrop: () => [{ isOver: false }, jest.fn()],
}));

jest.mock('react-dnd-html5-backend', () => ({
  HTML5Backend: {},
}));

test('renders low-code platform title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Low-Code Platform/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders canvas', () => {
  render(<App />);
  const canvasElement = screen.getByText(/Canvas/i);
  expect(canvasElement).toBeInTheDocument();
});

test('renders component library', () => {
  render(<App />);
  const componentsElement = screen.getAllByText(/Components/i)[0];
  expect(componentsElement).toBeInTheDocument();
});
