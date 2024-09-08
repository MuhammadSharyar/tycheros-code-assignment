import Image from "next/image";

type ServiceCardProps = {
  imagePath?: string;
  title?: string;
  description?: string;
};
export const ServiceCard = ({
  imagePath,
  title,
  description,
}: ServiceCardProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 lg:gap-1.5 rounded-3xl py-5 lg:py-10 px-2 lg:px-10 hover:shadow-xl shadow-[#E1E6E9]/50 hover:scale-105 bg-white transition-all duration-500 cursor-pointer">
      <div className="relative h-16 w-16">
        <Image src={imagePath ?? ""} alt="" fill className="absolute" />
      </div>
      <div className="space-y-2 lg:space-y-1.5">
        <h5 className="text-[#14183E] font-semibold text-center">{title}</h5>
        <p className="text-center text-[#5E6282] text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
