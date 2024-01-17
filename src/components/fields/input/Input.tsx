//Inputcomponent
'use client';

import React,{ InputHTMLAttributes, ReactNode, forwardRef } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: ReactNode;
};

export const InputComponent = forwardRef<HTMLInputElement, InputProps>(({ name = '', label = '', type = 'text', ...props }, ref) => {



  return (
    <div className="border-spacing-4 flex gap-2 flex-col">

      <h1 className="font-bold text-2xl">{label}</h1>
      <input
        className="focus:outline-none p-2 rounded-md  border border-gray-300 focus:border-gray-400 "
        ref={ref}
        name={name}
        type={type}
        {...props}
      />

    </div>


  )
})

InputComponent.displayName = 'InputComponent';