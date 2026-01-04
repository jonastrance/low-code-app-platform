import React from 'react';

interface FormProps {
  title: string;
  submitText: string;
  children?: React.ReactNode;
}

export const Form: React.FC<FormProps> = ({ title, submitText, children }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        padding: '24px',
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: '8px',
      }}
    >
      <h2 style={{ marginTop: 0, marginBottom: '20px', color: '#333' }}>{title}</h2>
      {children}
      <button
        type="submit"
        style={{
          marginTop: '16px',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          fontSize: '14px',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        {submitText}
      </button>
    </form>
  );
};
