'use client';

import { SelectHTMLAttributes, ReactNode, forwardRef } from "react";

type SelectOption = {
  value: number;
  description: string;
};

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  options?: SelectOption[];
};

export const SelectComponent = forwardRef<HTMLSelectElement, SelectProps>(({ name = '', options = [], ...props }, ref) => {
  return (
    <div className="border-spacing-4 mt-4 flex gap-2 flex-col">
      <select
        className="focus:outline-none p-4 rounded-md border border-gray-300 focus:border-gray-400"
        ref={ref}
        name={name}
        {...props}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.description}
          </option>
        ))}
      </select>
    </div>
  );
});

SelectComponent.displayName = 'SelectComponent';