import Heading from "@/components/shared/heading";
import { Circle } from "lucide-react";
import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <section className="min-h-[100vh] flex flex-col md:flex-row md:justify-between items-center mt-20 md:mt-0">
      <div className="flex-1 space-y-16">
        <div className="text-left w-full">
          <h5 className="text-[#5E6282] text-xs md:text-sm font-semibold mb-2">
            TESTIMONIALS
          </h5>
          <Heading size="h3" className="text-3xl md:text-5xl text-[#14183E]">
            What People Say About Us.
          </Heading>
        </div>
        <div className="flex gap-5">
          <Circle size={12} color="#39425D" fill="#39425D" />
          <Circle size={12} color="#E5E5E5" fill="#E5E5E5" />
          <Circle size={12} color="#E5E5E5" fill="#E5E5E5" />
        </div>
      </div>
      <div className="flex-1 flex justify-end items-center">
        <div className="relative bg-white p-5 space-y-7 border rounded-xl w-[75%] shadow-xl">
          <Image
            src={"/assets/images/testimonial-user.png"}
            alt=""
            width={45}
            height={45}
            className="absolute -top-5 -left-5"
          />
          <p className="text-[#5E6282] w-[85%] text-sm leading-6">
            “On the Windows talking painted pasture yet its express parties use.
            Sure last upon he same as knew next. Of believed or diverted no.”
          </p>
          <div className="space-y-1">
            <h4 className="text-[#5E6282] text-sm font-medium">Mike taylor</h4>
            <p className="text-xs text-[#5E6282]">Lahore, Pakistan</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
