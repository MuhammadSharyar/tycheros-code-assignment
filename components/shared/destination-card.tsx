import { Send } from "lucide-react";
import Image from "next/image";
import React from "react";

type DestinationCardProps = {
  imagePath?: string;
  title?: string;
  cost?: string;
  duration?: string;
};

export const DestinationCard = ({
  imagePath,
  title,
  cost,
  duration,
}: DestinationCardProps) => {
  return (
    <div className="h-96 w-[85%] self-center overflow-hidden rounded-3xl border-0 shadow-2xl shadow-[#E1E6E9]/50 lg:w-auto lg:self-auto">
      <div className="relative h-full w-full lg:w-[15.5rem]">
        <Image
          src={imagePath ?? ""}
          alt=""
          fill
          className="absolute -z-10 object-cover"
        />
        <div className="absolute bottom-0 w-full space-y-3 bg-white px-5 py-7">
          <div className="flex items-center justify-between text-sm font-medium text-[#5E6282]">
            <h5>{title}</h5>
            <p>{cost}</p>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-[#5E6282]">
            <Send size={12} fill="#000000" color="#000000" />
            <p>{duration}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
