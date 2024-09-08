import Heading from "@/components/shared/heading";
import { bookingSteps } from "@/constants";
import Image from "next/image";
import React from "react";

const BookingSteps = () => {
  return (
    <section className="mt-36 flex min-h-[100vh] flex-col items-center lg:mt-0 lg:flex-row lg:justify-between">
      <div className="flex-1 space-y-10">
        <div className="relative w-full text-left">
          <h5 className="mb-2 text-xs font-semibold text-[#5E6282] lg:text-sm">
            Easy and Fast
          </h5>
          <Heading size="h3" className="text-3xl text-[#14183E] lg:text-5xl">
            Book Your Next Trip In 3 Easy Steps
          </Heading>
        </div>
        <ul className="space-y-7">
          {bookingSteps.map((step) => (
            <li
              className="flex items-center gap-4 lg:w-[80%]"
              key={step.heading}
            >
              <Image src={step.imagePath} alt="" width={45} height={45} />
              <div>
                <h5 className="font-semibold text-[#5E6282]">{step.heading}</h5>
                <p className="text-sm font-light text-[#5E6282]">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-1 items-center justify-end">
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
