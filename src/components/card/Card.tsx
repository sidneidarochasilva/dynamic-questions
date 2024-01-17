import { ReactNode } from "react";


interface CardComponentProps {
  children: ReactNode;
}
export default function CardComponent({ children }: CardComponentProps) {
  return (
    <>
    
      <div className="bg-white p-8 min-h-96  rounded-3xl focus:shadow-none focus:outline-none focus:bg-opacity-0 flex flex-col gap-11">
        {children}
      </div>
    </>

  )
}


