import NewsletterDialog from "@/components/shared/newsletter-dialog";
import Image from "next/image";
import React from "react";

const Newsletter = () => {
  return (
    <section className="relative mt-40 flex items-center justify-center lg:mt-0 lg:min-h-[70vh]">
      <Image
        src={"/assets/svgs/newsletter-bg.svg"}
        alt=""
        width={1000}
        height={1000}
        className="absolute -z-10 hidden lg:block"
      />
      <div className="absolute -z-10 h-[250px] w-full rounded-xl rounded-tl-[5rem] bg-[#DFD7F9] lg:hidden">
        <Image
          src={"/assets/svgs/rings.svg"}
          alt=""
          width={500}
          height={500}
          className="translate-y-3"
        />
        <Image
          src={"/assets/svgs/blue-circle-share.svg"}
          alt=""
          width={50}
          height={50}
          className="-translate-y-[16.5rem] translate-x-[18rem]"
        />
      </div>
      <div className="space-y-2 lg:space-y-10">
        <h3 className="p-5 text-center font-medium text-[#5E6282] lg:px-28 lg:text-3xl">
          Subscribe to get information, latest news and other interesting offers
          about Jadoo
        </h3>
        <div className="flex flex-col items-center justify-center gap-2 px-5 lg:flex-row lg:gap-4 lg:px-0">
          <div className="flex items-center justify-center">
            <Image
              src={"/assets/svgs/mail.svg"}
              alt=""
              width={20}
              height={20}
              className="h-12 w-12 rounded-l-lg bg-white py-3 pl-5 pr-2"
            />
            <input
              className="h-12 w-full rounded-r-lg pl-2 text-[#39425D] outline-none"
              placeholder="Your email"
            />
          </div>
          <NewsletterDialog />
        </div>
      </div>
      <div className="absolute -bottom-24 -right-5 -z-30 md:bottom-0 md:right-5">
        <div className="relative h-[130px] w-[130px]">
          <Image
            src={"/assets/svgs/service-decore.svg"}
            alt=""
            fill
            className="absolute"
          />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
