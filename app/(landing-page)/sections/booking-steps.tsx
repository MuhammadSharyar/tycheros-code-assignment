import Heading from "@/components/shared/heading";
import { bookingSteps } from "@/constants";
import Image from "next/image";
import React from "react";

const BookingSteps = () => {
  return (
    <section className="min-h-[100vh] flex flex-col lg:flex-row lg:justify-between items-center mt-28 lg:mt-0">
      <div className="flex-1 space-y-10">
        <div className="text-left relative w-full">
          <h5 className="text-[#5E6282] text-xs lg:text-sm font-semibold mb-2">
            Easy and Fast
          </h5>
          <Heading size="h3" className="text-3xl lg:text-5xl text-[#14183E]">
            Book Your Next Trip In 3 Easy Steps
          </Heading>
        </div>
        <ul className="space-y-7">
          {bookingSteps.map((step) => (
            <li
              className="flex gap-4 items-center lg:w-[80%]"
              key={step.heading}
            >
              <Image src={step.imagePath} alt="" width={45} height={45} />
              <div>
                <h5 className="text-[#5E6282] font-semibold">{step.heading}</h5>
                <p className="text-sm font-light text-[#5E6282]">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 flex justify-end items-center">
        <Image
          src={"/assets/svgs/booking-section-main.svg"}
          alt=""
          width={600}
          height={600}
        />
      </div>
    </section>
  );
};

export default BookingSteps;
