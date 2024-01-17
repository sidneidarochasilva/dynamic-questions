//RatingComponent
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface StarsRatingProps {
  marginTop?: string;
  answerValue?: number;
  title?: string;
  description?: string;
  onChange?: (value: number) => void;
}

export const RatingComponent = ({
  marginTop,
  answerValue,
  title,
  description,
  onChange = () => { },
}: StarsRatingProps) => {
  const [filledStars, setFilledStars] = useState<number>(0);

  useEffect(() => {
    setFilledStars(answerValue || 0);
  }, [answerValue]);

  const handleStarClick = (index: number) => {
    const newFilledStars = index + 1;
    setFilledStars(newFilledStars);
    onChange(newFilledStars);
  };

  return (
    <>

      <div
        className={`${marginTop} mt-4 flex flex-wrap justify-center gap-2 sm:justify-start`}
      >
        <h1 className="mb-2 text-xl font-semibold text-light-blue dark:bg-light-blue dark:text-white md:text-2xl">
          {title}
        </h1>
        <h2 className="text-[12px] font-medium leading-6 text-light-gray dark:bg-light-blue dark:text-gray-300 md:text-[14px]">
          {description}
        </h2>
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <Image
              key={index}
              alt={`Estrela ${index + 1}`}
              src={index < filledStars ? "/star-full.svg" : "/star-empty.svg"}
              width={64}
              height={64}
              className="cursor-pointer"
              onClick={() => handleStarClick(index)}
            />
          ))}
      </div>
    </>

  );
};

RatingComponent.displayName = 'RatingComponent';