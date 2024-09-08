import Heading from "@/components/shared/heading";
import UnderlineDecore from "@/components/shared/underline-decore";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="mt-10 flex min-h-[90vh] flex-col justify-between lg:mt-0 lg:flex-row">
      <Image
        src={"/assets/svgs/decore.svg"}
        alt=""
        width={550}
        height={500}
        className="absolute right-0 top-0 -z-30"
      />
      <div className="flex flex-1 flex-col items-center justify-center gap-7 lg:items-start">
        <h4 className="font-bold text-[#DF6951]">
          BEST DESTINATION AROUND THE WORLD
        </h4>
        <Heading
          size="h2"
          className="space-y-2 text-center text-5xl font-bold leading-[3.5rem] text-[#181E4B] lg:text-left lg:text-7xl lg:leading-[5.5rem]"
        >
          Travel,{" "}
          <span className="relative inline-block">
            enjoy{" "}
            <span className="absolute bottom-0 left-0 right-0 -z-20 flex justify-center lg:bottom-0.5">
              <UnderlineDecore />
            </span>
          </span>{" "}
          and live a new and full life
        </Heading>
        <p className="text-center text-sm leading-6 text-[#5E6282] lg:w-[70%] lg:text-left">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
        <div className="flex items-center gap-8">
          <Button className="h-10 bg-[#F1A501] px-5 shadow-lg shadow-[#DF6951]/20 transition-all duration-150 hover:scale-105 hover:bg-[#F1A501]/90 active:scale-100 lg:h-12">
            Find out more
          </Button>
          <div className="flex items-center gap-4">
            <Button
              size={"icon"}
              className="h-10 w-10 rounded-full bg-[#DF6951] shadow-lg shadow-[#DF6951]/20 transition-all duration-150 hover:scale-105 hover:bg-[#DF6951]/90 active:scale-100 lg:h-11 lg:w-11"
            >
              <Play className="fill-white" size={18} />
            </Button>
            <p className="font-medium text-[#686D77]">Play Demo</p>
          </div>
        </div>
      </div>
      <div className="mt-10 flex-1 lg:mt-0">
        <div className="relative">
          <div className="relative h-[320px] w-[320px] lg:h-[600px] lg:w-[600px]">
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
            className="absolute left-[12%] top-0 lg:left-[20%] lg:top-[10%]"
          />
          <Image
            src={"/assets/svgs/plane.svg"}
            alt=""
            width={100}
            height={100}
            className="absolute left-[72%] top-[10%] -z-10 lg:left-[85%] lg:top-[25%]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
