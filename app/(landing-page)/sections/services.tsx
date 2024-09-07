import Heading from "@/components/shared/heading";
import ServiceCard from "@/components/shared/service-card";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <section className="min-h-[100vh] flex flex-col justify-center items-center mt-20 md:mt-0">
      <div className="text-center relative w-full">
        <h5 className="text-[#5E6282] text-xs md:text-sm font-semibold mb-2">
          CATEGORY
        </h5>
        <Heading size="h3" className="text-3xl md:text-5xl text-[#14183E]">
          We Offer Best Services
        </Heading>
        <div className="hidden md:block absolute -right-10 -top-5">
          <div className="relative w-[110px] h-[110px]">
            <Image
              src={"/assets/svgs/service-design.svg"}
              alt=""
              fill
              className="absolute"
            />
          </div>
        </div>
      </div>
      <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10 mt-10 md:mt-16">
        <ServiceCard
          image={
            <div className="relative h-16 w-16">
              <Image
                src={"/assets/svgs/weather.svg"}
                alt=""
                fill
                className="absolute"
              />
            </div>
          }
          title="Calculated Weather"
          description="Built Wicket longer admire do barton vanity itself do in it."
        />
        <ServiceCard
          image={
            <div className="relative h-16 w-16">
              <Image
                src={"/assets/svgs/flights.svg"}
                alt=""
                fill
                className="absolute"
              />
            </div>
          }
          title="Best Flights"
          description="Engrossed listening. Park gate sell they west hard for the."
        />
        <ServiceCard
          image={
            <div className="relative h-16 w-16">
              <Image
                src={"/assets/svgs/events.svg"}
                alt=""
                fill
                className="absolute"
              />
            </div>
          }
          title="Local Events"
          description="Barton vanity itself do in it. Preferd to men it engrossed listening. "
        />
        <ServiceCard
          image={
            <div className="relative h-16 w-16">
              <Image
                src={"/assets/svgs/customization.svg"}
                alt=""
                fill
                className="absolute"
              />
            </div>
          }
          title="Customization"
          description="We deliver outsourced aviation services for military customers"
        />
        <div
          style={{ height: "70px", width: "70px" }}
          className="hidden md:block rounded-tl-3xl rounded-br-lg bg-[#DF6951] absolute -bottom-7 left-[23%] -z-40"
        ></div>
      </div>
    </section>
  );
};

export default Services;
