import { InputHTMLAttributes, ReactNode, forwardRef } from "react";


type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
 
  description?: string;
};

export const CheckboxComponent = forwardRef<HTMLInputElement, CheckboxProps>(({ description, name, ...props }, ref) => {
  return (
    <>
      <h2 className="text-[12px] font-medium mt-4 leading-6 text-light-gray dark:bg-light-blue dark:text-gray-300 md:text-[14px]">
        {description}
      </h2>
      <div className="border-spacing-4  flex gap-6 flex-col">
        {itemsCheck.map((option, index) => (
          <div key={index} className="flex items-center">
            <input
              type="checkbox"
              id={`${name}-${index}`}
              
              ref={ref}
              {...props}
            />
            <label htmlFor={`${name}-${index}`} className="ml-2">{option.label}</label>
          </div>
        ))}
      </div>
    </>
  );
});

const itemsCheck = [
  {
    id: "1",
    label: "OPC 1",
  },
  {
    id: "2",
    label: "OPC 2",
  },
  {
    id: "3",
    label: "OPC 3",
  },
  {
    id: "4",
    label: "OPC 4",
  },
  {
    id: "5",
    label: "OPC 5",
  },
  {
    id: "6",
    label: "OPC 6",
  },
  {
    id: "7",
    label: "OPC 7",
  },
  {
    id: "8",
    label: "OPC 8",
  },
  {
    id: "9",
    label: "OPC 9",
  },
  {
    id: "10",
    label: "OPC 10",
  },
];
