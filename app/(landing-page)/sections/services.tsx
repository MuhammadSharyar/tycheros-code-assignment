import Heading from "@/components/shared/heading";
import ServiceCard from "@/components/shared/service-card";
import { services } from "@/constants";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <section className="min-h-[100vh] flex flex-col justify-center items-center mt-20 lg:mt-0">
      <div className="text-center relative w-full">
        <h5 className="text-[#5E6282] text-xs lg:text-sm font-semibold mb-2">
          CATEGORY
        </h5>
        <Heading size="h3" className="text-3xl lg:text-5xl text-[#14183E]">
          We Offer Best Services
        </Heading>
        <div className="hidden lg:block absolute -right-10 -top-5">
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
      <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-10 mt-10 lg:mt-16">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            imagePath={service.imagePath}
            title={service.title}
            description={service.description}
          />
        ))}
        <div
          style={{ height: "70px", width: "70px" }}
          className="hidden lg:block rounded-tl-3xl rounded-br-lg bg-[#DF6951] absolute -bottom-7 left-[23%] -z-40"
        ></div>
      </div>
    </section>
  );
};

export default Services;
