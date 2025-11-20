import React from "react";
import { CardProps } from "../../interfaces";

const Card = ({ title, content }: CardProps) => {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white w-[250px]">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default Card;
