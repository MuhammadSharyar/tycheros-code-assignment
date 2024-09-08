import DestinationCard from "@/components/shared/destination-card";
import Heading from "@/components/shared/heading";
import { destinations } from "@/constants";
import Image from "next/image";
import React from "react";

const Destinations = () => {
  return (
    <section className="mt-20 flex min-h-[100vh] flex-col items-center justify-center lg:mt-0">
      <div className="relative w-full text-center">
        <h5 className="mb-2 text-xs font-semibold text-[#5E6282] lg:text-sm">
          TOP SELLING
        </h5>
        <Heading size="h3" className="text-3xl text-[#14183E] lg:text-5xl">
          Top Destinations
        </Heading>
      </div>
      <div className="relative mt-10 flex w-full flex-col justify-center gap-7 lg:mt-16 lg:flex-row lg:gap-10">
        {destinations.map((dest) => (
          <DestinationCard
            key={dest.title}
            imagePath={dest.imagePath}
            title={dest.title}
            cost={dest.cost}
            duration={dest.duration}
          />
        ))}
        <div className="absolute -bottom-28 right-14 -z-20 rotate-90 md:bottom-10 md:rotate-0">
          <div className="relative h-[200px] w-[200px]">
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
