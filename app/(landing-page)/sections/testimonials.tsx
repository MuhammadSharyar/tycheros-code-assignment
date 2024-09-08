"use client";

import Heading from "@/components/shared/heading";
import { testimonials } from "@/constants";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp, Circle } from "lucide-react";
import Image from "next/image";
import React from "react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);

  const handleNextTestimonial = () => {
    if (currentTestimonial === testimonials.length - 1)
      setCurrentTestimonial(0);
    else setCurrentTestimonial((prev) => prev + 1);
  };

  const handlePreviousTestimonial = () => {
    if (currentTestimonial === 0)
      setCurrentTestimonial(testimonials.length - 1);
    else setCurrentTestimonial((prev) => prev - 1);
  };

  return (
    <section className="min-h-[50vh] flex flex-col lg:flex-row lg:justify-between gap-14 items-center mt-14 lg:mt-0">
      <div className="flex-1 space-y-10 lg:space-y-16">
        <div className="text-left w-full">
          <h5 className="text-[#5E6282] text-xs lg:text-sm font-semibold mb-2">
            TESTIMONIALS
          </h5>
          <Heading size="h3" className="text-3xl lg:text-5xl text-[#14183E]">
            What People Say About Us.
          </Heading>
        </div>
        <div className="flex gap-5">
          {testimonials.map((_, i) => (
            <Circle
              key={i}
              size={12}
              color={currentTestimonial === i ? "#39425D" : "#E5E5E5"}
              fill={currentTestimonial === i ? "#39425D" : "#E5E5E5"}
              onClick={() => {
                setCurrentTestimonial(i);
              }}
            />
          ))}
        </div>
      </div>
      <div className="flex-1 flex justify-end items-center mt-7 lg:mt-0">
        <div className="relative lg:translate-y-[30%] flex flex-col items-center">
          <div className="bg-white p-5 space-y-7 rounded-xl w-[20rem] lg:w-[28rem] shadow-2xl shadow-[#E1E6E9]/50">
            <Image
              src={testimonials[currentTestimonial].imagePath}
              alt=""
              width={55}
              height={55}
              className="absolute -top-5 -left-5 rounded-full"
            />
            <p className="text-[#5E6282] lg:w-[85%] text-sm leading-6">
              {testimonials[currentTestimonial].review}
            </p>
            <div className="space-y-1">
              <h4 className="text-[#5E6282] text-sm font-medium">
                {testimonials[currentTestimonial].name}
              </h4>
              <p className="text-xs text-[#5E6282]">
                {testimonials[currentTestimonial].description}
              </p>
            </div>
          </div>
          <div className="translate-x-5 lg:translate-x-10 -translate-y-40 lg:-translate-y-36 -z-20 relative bg-white p-5 space-y-7 border rounded-xl w-[20rem] lg:w-[28rem]">
            <Image
              src={
                testimonials[
                  currentTestimonial === testimonials.length
                    ? 0
                    : currentTestimonial
                ].imagePath
              }
              alt=""
              width={55}
              height={55}
              className="absolute -top-5 -left-5 rounded-full"
            />
            <p className="text-[#5E6282] lg:w-[85%] text-sm leading-6">
              {
                testimonials[
                  currentTestimonial === testimonials.length
                    ? 0
                    : currentTestimonial
                ].review
              }
            </p>
            <div className="space-y-1">
              <h4 className="text-[#5E6282] text-sm font-medium">
                {
                  testimonials[
                    currentTestimonial === testimonials.length
                      ? 0
                      : currentTestimonial
                  ].name
                }
              </h4>
              <p className="text-xs text-[#5E6282]">
                {
                  testimonials[
                    currentTestimonial === testimonials.length
                      ? 0
                      : currentTestimonial
                  ].description
                }
              </p>
            </div>
          </div>
        </div>
        <div className="hidden lg:block ml-24 translate-y-[30%] lg:translate-y-[50%] space-y-7">
          <ChevronUp
            size={20}
            className={cn(
              "cursor-pointer",
              currentTestimonial === 0 && "text-[#BCB7C2]",
              currentTestimonial !== 0 && "text-[#3E2E4D]"
            )}
            onClick={handlePreviousTestimonial}
          />
          <ChevronDown
            size={20}
            className={cn(
              "cursor-pointer",
              currentTestimonial === testimonials.length - 1 &&
                "text-[#BCB7C2]",
              currentTestimonial !== testimonials.length - 1 && "text-[#3E2E4D]"
            )}
            onClick={handleNextTestimonial}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
