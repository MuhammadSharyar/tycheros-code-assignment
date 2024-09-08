import DestinationCard from "@/components/shared/destination-card";
import Heading from "@/components/shared/heading";
import { destinations } from "@/constants";
import Image from "next/image";
import React from "react";

const Destinations = () => {
  return (
    <section className="min-h-[100vh] flex flex-col justify-center items-center mt-20 lg:mt-0">
      <div className="text-center relative w-full">
        <h5 className="text-[#5E6282] text-xs lg:text-sm font-semibold mb-2">
          TOP SELLING
        </h5>
        <Heading size="h3" className="text-3xl lg:text-5xl text-[#14183E]">
          Top Destinations
        </Heading>
      </div>
      <div className="relative w-full flex justify-center flex-col lg:flex-row gap-7 lg:gap-10 mt-10 lg:mt-16">
        {destinations.map((dest) => (
          <DestinationCard
            key={dest.title}
            imagePath={dest.imagePath}
            title={dest.title}
            cost={dest.cost}
            duration={dest.duration}
          />
        ))}
        <div className="hidden lg:block absolute right-14 bottom-10 -z-20">
          <div className="relative w-[200px] h-[200px]">
            <Image
              src={"/assets/svgs/destination-decore.svg"}
              alt=""
              fill
              className="absolute"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
