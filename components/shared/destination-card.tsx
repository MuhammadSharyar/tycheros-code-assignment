import { Send } from "lucide-react";
import Image from "next/image";
import React from "react";

type DestinationCardProps = {
  imageLink?: string;
  title?: string;
  cost?: string;
  duration?: string;
};

export const DestinationCard = ({
  imageLink,
  title,
  cost,
  duration,
}: DestinationCardProps) => {
  return (
    <div className="h-96 w-[90%] self-center md:self-auto md:w-auto rounded-3xl overflow-hidden border-0">
      <div className="relative h-full w-full md:w-[15.5rem]">
        <Image
          src={imageLink ?? ""}
          alt=""
          fill
          className="absolute object-cover -z-10"
        />
        <div className="absolute bottom-0 w-full bg-white p-5 space-y-2">
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
