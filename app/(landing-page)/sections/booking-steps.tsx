import Heading from "@/components/shared/heading";
import Image from "next/image";
import React from "react";

const BookingSteps = () => {
  return (
    <section className="min-h-[100vh] flex flex-col md:flex-row md:justify-between items-center mt-20 md:mt-0">
      <div className="flex-1 space-y-10">
        <div className="text-left relative w-full">
          <h5 className="text-[#5E6282] text-xs md:text-sm font-semibold mb-2">
            Easy and Fast
          </h5>
          <Heading size="h3" className="text-3xl md:text-5xl text-[#14183E]">
            Book Your Next Trip In 3 Easy Steps
          </Heading>
        </div>
        <ul className="space-y-7">
          <li className="flex gap-4 items-center md:w-[80%]">
            <Image
              src={"/assets/svgs/booking-step-1.svg"}
              alt=""
              width={45}
              height={45}
            />
            <div>
              <h5 className="text-[#5E6282] font-semibold">
                Choose Destination
              </h5>
              <p className="text-sm font-light text-[#5E6282]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </div>
          </li>
          <li className="flex gap-4 items-center md:w-[80%]">
            <Image
              src={"/assets/svgs/booking-step-2.svg"}
              alt=""
              width={45}
              height={45}
            />
            <div>
              <h5 className="text-[#5E6282] font-semibold">Make Payment</h5>
              <p className="text-sm font-light text-[#5E6282]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </div>
          </li>
          <li className="flex gap-4 items-center md:w-[80%]">
            <Image
              src={"/assets/svgs/booking-step-3.svg"}
              alt=""
              width={45}
              height={45}
            />
            <div>
              <h5 className="text-[#5E6282] font-semibold">
                Reache Airport on Selected Date
              </h5>
              <p className="text-sm font-light text-[#5E6282]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </div>
          </li>
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
