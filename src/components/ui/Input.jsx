// ============================================
// src/components/ui/Input.jsx
// ============================================
import React from 'react';

export const Input = ({ 
  label, 
  error, 
  required = false,
  type = 'text',
  value,
  onChange,
  placeholder,
  ...props 
}) => {
  return (
    <div className="mb-6">
      {label && (
        <label className="block text-gray-700 font-semibold mb-2">
          {label} {required && <span className="text-rose-500">*</span>}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`
          w-full px-4 py-2 border rounded-lg 
          focus:outline-none focus:ring-2 focus:ring-rose-400
          ${error ? 'border-red-500' : 'border-gray-300'}
        `}
        {...props}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export const TextArea = ({ 
  label, 
  error,
  value,
  onChange,
  placeholder,
  rows = 4,
  ...props 
}) => {
  return (
    <div className="mb-6">
      {label && (
        <label className="block text-gray-700 font-semibold mb-2">
          {label}
        </label>
      )}
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className={`
          w-full px-4 py-2 border rounded-lg 
          focus:outline-none focus:ring-2 focus:ring-rose-400
          ${error ? 'border-red-500' : 'border-gray-300'}
        `}
        {...props}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export const Select = ({ 
  label, 
  error,
  required = false,
  value,
  onChange,
  options = [],
  placeholder = 'Please select',
  ...props 
}) => {
  return (
    <div className="mb-6">
      {label && (
        <label className="block text-gray-700 font-semibold mb-2">
          {label} {required && <span className="text-rose-500">*</span>}
        </label>
      )}
      <select
        value={value}
        onChange={onChange}
        className={`
          w-full px-4 py-2 border rounded-lg 
          focus:outline-none focus:ring-2 focus:ring-rose-400
          ${error ? 'border-red-500' : 'border-gray-300'}
        `}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};
