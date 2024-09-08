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
    <div className="h-96 w-[85%] lg:w-auto self-center lg:self-auto  rounded-3xl overflow-hidden border-0 shadow-2xl shadow-[#E1E6E9]/50">
      <div className="relative h-full w-full lg:w-[15.5rem]">
        <Image
          src={imagePath ?? ""}
          alt=""
          fill
          className="absolute object-cover -z-10"
        />
        <div className="absolute bottom-0 w-full bg-white px-5 py-7 space-y-3">
          <div className="flex justify-between items-center text-sm text-[#5E6282] font-medium">
            <h5>{title}</h5>
            <p>{cost}</p>
          </div>
          <div className="flex gap-2 items-center text-xs text-[#5E6282] font-medium">
            <Send size={12} fill="#000000" color="#000000" />
            <p>{duration}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
