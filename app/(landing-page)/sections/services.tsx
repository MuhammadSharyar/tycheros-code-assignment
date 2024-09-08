import Heading from "@/components/shared/heading";
import ServiceCard from "@/components/shared/service-card";
import { services } from "@/constants";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <section className="mt-20 flex min-h-[100vh] flex-col items-center justify-center lg:mt-0">
      <div className="relative w-full text-center">
        <h5 className="mb-2 text-xs font-semibold text-[#5E6282] lg:text-sm">
          CATEGORY
        </h5>
        <Heading size="h3" className="text-3xl text-[#14183E] lg:text-5xl">
          We Offer Best Services
        </Heading>
        <div className="absolute -right-5 -top-2 -z-20 md:-right-10 md:-top-5">
          <div className="relative h-[110px] w-[110px]">
            <Image
              src={"/assets/svgs/service-decore.svg"}
              alt=""
              fill
              className="absolute"
            />
          </div>
        </div>
      </div>
      <div className="relative mt-10 grid grid-cols-2 gap-4 lg:mt-16 lg:grid-cols-4 lg:gap-10">
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
          className="absolute -bottom-7 left-[23%] -z-40 hidden rounded-br-lg rounded-tl-3xl bg-[#DF6951] lg:block"
        ></div>
      </div>
    </section>
  );
};

export default Services;
