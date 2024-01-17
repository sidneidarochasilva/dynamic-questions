//RadioComponent
import { InputHTMLAttributes, forwardRef } from "react";

type RadioOption = {
  value: number;
  description: string;
};

type RadioProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  options?: RadioOption[];
  description?: string;
};

export const RadioComponent = forwardRef<HTMLInputElement, RadioProps>(({ description, value, name, options = [], ...props }, ref) => {
  return (
    <>
      <h2 className="text-[12px] font-medium mt-4 leading-6 text-light-gray dark:bg-light-blue dark:text-gray-300 md:text-[14px]">
        {description}
      </h2>
      <div className="border-spacing-4  flex gap-6 flex-row">
        {options.map((option, index) => (
          <div key={index} className="flex items-center">
            <input
              type="radio"
              id={`${name}-${index}`}
              defaultValue={value}
              ref={ref}
              {...props}
            />
            <label htmlFor={`${name}-${index}`} className="ml-2">{option.description}</label>
          </div>
        ))}
      </div>
    </>

  );
});
