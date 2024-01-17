//RadioButtonComponent
import React,{ InputHTMLAttributes, ReactNode, forwardRef } from "react";


type InputProps = InputHTMLAttributes<HTMLInputElement> & {

  title?: ReactNode;
  description?: ReactNode;
};





export const RadioButtonComponent =  forwardRef<HTMLInputElement, InputProps>(({title = '',description = '',...props},ref) => {

  return (

    <div
    className="mt-4 flex flex-col gap-2" >
    <h1 className="mb-2 text-xl font-semibold text-light-blue dark:bg-light-blue dark:text-white md:text-2xl">
      {title}
    </h1>
    <h2 className="text-[12px] font-medium leading-6 text-light-gray dark:bg-light-blue dark:text-gray-300 md:text-[14px]">
      {description}
    </h2>

    <div className="flex items-center mb-4 mt-4 justify-between">
      <div className="flex flex-col text-center">
        <input type="radio" value="" name="default-radio" className="aspect-square h-4 w-4 rounded-full border-1  border-slate-900 text-slate-900 ring-offset-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800  dark:text-slate-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300" />
        <label className=" text-sm font-medium text-gray-900 dark:text-gray-300">1</label>
      </div>
      <div className="flex flex-col text-center">
        <input type="radio" value="" name="default-radio" className="aspect-square h-4 w-4 rounded-full border-1  border-slate-900 text-slate-900 ring-offset-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800  dark:text-slate-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300" />
        <label className=" text-sm font-medium text-gray-900 dark:text-gray-300">2</label>
      </div>
      <div className="flex flex-col text-center">
        <input type="radio" value="" name="default-radio" className="aspect-square h-4 w-4 rounded-full border-1  border-slate-900 text-slate-900 ring-offset-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800  dark:text-slate-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300" />
        <label className=" text-sm font-medium text-gray-900 dark:text-gray-300">3</label>
      </div>
      <div className="flex flex-col text-center">
        <input type="radio" value="" name="default-radio" className="aspect-square h-4 w-4 rounded-full border-1  border-slate-900 text-slate-900 ring-offset-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800  dark:text-slate-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300" />
        <label className=" text-sm font-medium text-gray-900 dark:text-gray-300">4</label>
      </div>
      <div className="flex flex-col text-center">
        <input type="radio" value="" name="default-radio" className="aspect-square h-4 w-4 rounded-full border-1  border-slate-900 text-slate-900 ring-offset-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800  dark:text-slate-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300" />
        <label className=" text-sm font-medium text-gray-900 dark:text-gray-300">5</label>
      </div>
      <div className="flex flex-col text-center">
        <input type="radio" value="" name="default-radio" className="aspect-square h-4 w-4 rounded-full border-1  border-slate-900 text-slate-900 ring-offset-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800  dark:text-slate-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300" />
        <label className=" text-sm font-medium text-gray-900 dark:text-gray-300">6</label>
      </div>
      <div className="flex flex-col text-center">
        <input type="radio" value="" name="default-radio" className="aspect-square h-4 w-4 rounded-full border-1  border-slate-900 text-slate-900 ring-offset-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800  dark:text-slate-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300" />
        <label className=" text-sm font-medium text-gray-900 dark:text-gray-300">7</label>
      </div>
      <div className="flex flex-col text-center">
        <input type="radio" value="" name="default-radio" className="aspect-square h-4 w-4 rounded-full border-1  border-slate-900 text-slate-900 ring-offset-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800  dark:text-slate-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300" />
        <label className=" text-sm font-medium text-gray-900 dark:text-gray-300">8</label>
      </div>
      <div className="flex flex-col text-center">
        <input type="radio" value="" name="default-radio" className="aspect-square h-4 w-4 rounded-full border-1  border-slate-900 text-slate-900 ring-offset-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800  dark:text-slate-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300" />
        <label className=" text-sm font-medium text-gray-900 dark:text-gray-300">9</label>
      </div>
      <div className="flex flex-col text-center">
        <input type="radio" value="" name="default-radio" className="aspect-square h-4 w-4 rounded-full border-1  border-slate-900 text-slate-900 ring-offset-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800  dark:text-slate-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300" />
        <label className=" text-sm font-medium text-gray-900 dark:text-gray-300">10</label>
      </div>
    </div>
 
  </div>
   
  )})