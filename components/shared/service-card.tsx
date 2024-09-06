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
    <div className="flex flex-col justify-center items-center gap-1.5 rounded-3xl py-5 md:py-10 px-7 md:px-10 hover:shadow-xl shadow-[#E1E6E9]/50 hover:scale-105 hover:bg-white transition-all duration-500 cursor-pointer">
      {image}
      <h5 className="text-[#14183E] font-semibold">{title}</h5>
      <p className="text-center text-[#5E6282] text-sm">{description}</p>
    </div>
  );
};

export default ServiceCard;
