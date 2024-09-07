import Heading from "@/components/shared/heading";
import UnderlineDecore from "@/components/shared/underline-decore";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between min-h-[90vh] mt-10 md:mt-0">
      <Image
        src={"/assets/svgs/decore.svg"}
        alt=""
        width={550}
        height={500}
        className="absolute top-0 right-0 -z-30"
      />
      <div className="flex-1 flex flex-col gap-7 justify-center items-center md:items-start">
        <h4 className="text-[#DF6951] font-bold">
          BEST DESTINATION AROUND THE WORLD
        </h4>
        <Heading
          size="h2"
          className="text-5xl md:text-7xl space-y-2 text-[#181E4B] text-center md:text-left"
        >
          Travel,{" "}
          <span className="relative inline-block">
            enjoy{" "}
            <span className="absolute left-0 right-0 bottom-0 md:bottom-0.5 flex justify-center -z-20">
              <UnderlineDecore />
            </span>
          </span>{" "}
          and live a new and full life
        </Heading>
        <p className="text-sm w-[70%] text-[#5E6282] text-center md:text-left">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
        <div className="flex gap-8 items-center">
          <Button className="bg-[#F1A501] hover:bg-[#F1A501]/90 shadow-[#DF6951]/20 shadow-lg h-10 md:h-12 px-5">
            Find out more
          </Button>
          <div className="flex items-center gap-4">
            <Button
              size={"icon"}
              className="rounded-full h-10 md:h-11 w-10 md:w-11 bg-[#DF6951] hover:bg-[#DF6951]/90 shadow-[#DF6951]/20 shadow-lg"
            >
              <Play className="fill-white" size={18} />
            </Button>
            <p className="text-[#686D77] font-medium">Play Demo</p>
          </div>
        </div>
      </div>
      <div className="flex-1 mt-10 md:mt-0">
        <div className="relative">
          <div className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px]">
            <Image
              src={"/assets/images/traveller.png"}
              alt=""
              fill
              className="absolute"
            />
          </div>
          <Image
            src={"/assets/svgs/plane.svg"}
            alt=""
            width={100}
            height={100}
            className="absolute top-0 left-[12%] md:top-[10%] md:left-[20%]"
          />
          <Image
            src={"/assets/svgs/plane.svg"}
            alt=""
            width={100}
            height={100}
            className="absolute top-[10%] left-[72%] md:top-[25%] md:left-[85%] -z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
