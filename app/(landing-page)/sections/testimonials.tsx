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
    <section className="mt-14 flex min-h-[50vh] flex-col items-center gap-14 lg:mt-0 lg:flex-row lg:justify-between">
      <div className="flex-1 space-y-10 lg:space-y-16">
        <div className="w-full text-left">
          <h5 className="mb-2 text-xs font-semibold text-[#5E6282] lg:text-sm">
            TESTIMONIALS
          </h5>
          <Heading size="h3" className="text-3xl text-[#14183E] lg:text-5xl">
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
      <div className="mt-7 flex flex-1 items-center justify-end lg:mt-0">
        <div className="relative flex flex-col items-center lg:translate-y-[30%]">
          <div className="w-[20rem] space-y-7 rounded-xl bg-white p-5 shadow-2xl shadow-[#E1E6E9]/50 lg:w-[28rem]">
            <Image
              src={testimonials[currentTestimonial].imagePath}
              alt=""
              width={55}
              height={55}
              className="absolute -left-5 -top-5 rounded-full"
            />
            <p className="text-sm leading-6 text-[#5E6282] lg:w-[85%]">
              {testimonials[currentTestimonial].review}
            </p>
            <div className="space-y-1">
              <h4 className="text-sm font-medium text-[#5E6282]">
                {testimonials[currentTestimonial].name}
              </h4>
              <p className="text-xs text-[#5E6282]">
                {testimonials[currentTestimonial].description}
              </p>
            </div>
          </div>
          <div className="relative -z-20 w-[20rem] -translate-y-40 translate-x-5 space-y-7 rounded-xl border bg-white p-5 lg:w-[28rem] lg:-translate-y-36 lg:translate-x-10">
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
              className="absolute -left-5 -top-5 rounded-full"
            />
            <p className="text-sm leading-6 text-[#5E6282] lg:w-[85%]">
              {
                testimonials[
                  currentTestimonial === testimonials.length
                    ? 0
                    : currentTestimonial
                ].review
              }
            </p>
            <div className="space-y-1">
              <h4 className="text-sm font-medium text-[#5E6282]">
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
        <div className="ml-24 hidden translate-y-[30%] space-y-7 lg:block lg:translate-y-[50%]">
          <ChevronUp
            size={20}
            className={cn(
              "cursor-pointer",
              currentTestimonial === 0 && "text-[#BCB7C2]",
              currentTestimonial !== 0 && "text-[#3E2E4D]",
            )}
            onClick={handlePreviousTestimonial}
          />
          <ChevronDown
            size={20}
            className={cn(
              "cursor-pointer",
              currentTestimonial === testimonials.length - 1 &&
                "text-[#BCB7C2]",
              currentTestimonial !== testimonials.length - 1 &&
                "text-[#3E2E4D]",
            )}
            onClick={handleNextTestimonial}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
