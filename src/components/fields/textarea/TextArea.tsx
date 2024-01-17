'use client';

import { ReactNode, TextareaHTMLAttributes, forwardRef } from "react";

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
};

export const TextAreaComponent = forwardRef<HTMLTextAreaElement, TextAreaProps>((
  {
    name = '',
    label = '',
    title = '',
    description = '',
    ...props
  },
  ref) => {



  return (
    <div className="border-spacing-4 flex gap-2 flex-col">
        <h1 className="mb-2 text-xl font-semibold text-light-blue dark:bg-light-blue dark:text-white md:text-2xl">
          {title}
        </h1>
        <h2 className="text-[12px] font-medium leading-6 text-light-gray dark:bg-light-blue dark:text-gray-300 md:text-[14px]">
          {description}  
          <span className="text-[14px] font-medium text-[#737A86]">
            (opcional)
          </span>
        </h2>
      <textarea
        className="flex min-h-[80px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none  focus-visible:ring-0 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300"
        ref={ref} name={name} {...props} />

    </div>
  )
})


TextAreaComponent.displayName = 'TextAreaComponent';