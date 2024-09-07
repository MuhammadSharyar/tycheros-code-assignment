import DestinationCard from "@/components/shared/destination-card";
import Heading from "@/components/shared/heading";
import { Send } from "lucide-react";
import Image from "next/image";
import React from "react";

const Destinations = () => {
  return (
    <section className="min-h-[100vh] flex flex-col justify-center items-center mt-20 md:mt-0">
      <div className="text-center relative w-full">
        <h5 className="text-[#5E6282] text-xs md:text-sm font-semibold mb-2">
          TOP SELLING
        </h5>
        <Heading size="h3" className="text-3xl md:text-5xl text-[#14183E]">
          Top Destinations
        </Heading>
      </div>
      <div className="w-full flex justify-center flex-col md:flex-row gap-7 md:gap-10 mt-10 md:mt-16">
        <DestinationCard
          imageLink="/assets/images/rome.png"
          title="Rome, Italy"
          cost="$5,42k"
          duration="10 Days Trip"
        />
        <DestinationCard
          imageLink="/assets/images/london.png"
          title="London, UK"
          cost="$4.2k"
          duration="12 Days Trip"
        />
        <DestinationCard
          imageLink="/assets/images/europe.png"
          title="Full Europe"
          cost="$15k"
          duration="28 Days Trip"
        />
      </div>
    </section>
  );
};

export default Destinations;
