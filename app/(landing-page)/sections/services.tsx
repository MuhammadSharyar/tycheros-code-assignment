import Heading from "@/components/shared/heading";
import Image from "next/image";
import React, { ReactNode } from "react";

const Services = () => {
  return (
    <section className="min-h-[100vh] flex flex-col justify-center items-center">
      <div className="text-center relative w-full">
        <h5 className="text-[#5E6282] text-sm font-semibold mb-2">CATEGORY</h5>
        <Heading size="h3" className="text-5xl text-[#14183E]">
          We Offer Best Services
        </Heading>
        <div className="absolute -right-10 -top-3">
          <div className="relative w-[100px] h-[100px]">
            <Image
              src={"/assets/svgs/service-design.svg"}
              alt=""
              fill
              className="absolute"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-10">
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
            <div className="relative h-20 w-24">
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
      </div>
    </section>
  );
};

type ServiceCardProps = {
  image?: ReactNode;
  title?: string;
  description?: string;
};

const ServiceCard = ({ image, title, description }: ServiceCardProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-1.5 border rounded-3xl py-10 px-10">
      {image}
      <h5 className="text-[#14183E] font-semibold">{title}</h5>
      <p className="text-center text-[#5E6282] text-sm">{description}</p>
    </div>
  );
};

export default Services;
