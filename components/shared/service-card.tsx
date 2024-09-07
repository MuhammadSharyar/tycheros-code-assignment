import { ReactNode } from "react";

type ServiceCardProps = {
  image?: ReactNode;
  title?: string;
  description?: string;
};
export const ServiceCard = ({
  image,
  title,
  description,
}: ServiceCardProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 md:gap-1.5 rounded-3xl py-5 md:py-10 px-2 md:px-10 hover:shadow-xl shadow-[#E1E6E9]/50 hover:scale-105 bg-white transition-all duration-500 cursor-pointer">
      {image}
      <div className="space-y-2 md:space-y-1.5">
        <h5 className="text-[#14183E] font-semibold text-center">{title}</h5>
        <p className="text-center text-[#5E6282] text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
