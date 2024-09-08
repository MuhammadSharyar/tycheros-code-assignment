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
    <div className="flex cursor-pointer flex-col items-center justify-center gap-4 rounded-3xl bg-white px-2 py-5 shadow-[#E1E6E9]/50 transition-all duration-500 hover:scale-105 hover:shadow-xl lg:gap-1.5 lg:px-10 lg:py-10">
      <div className="relative h-16 w-16">
        <Image src={imagePath ?? ""} alt="" fill className="absolute" />
      </div>
      <div className="space-y-2 lg:space-y-1.5">
        <h5 className="text-center font-semibold text-[#14183E]">{title}</h5>
        <p className="text-center text-sm text-[#5E6282]">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
