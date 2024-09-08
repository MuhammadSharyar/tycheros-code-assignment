import NewsletterDialog from "@/components/shared/newsletter-dialog";
import Image from "next/image";
import React from "react";

const Newsletter = () => {
  return (
    <section className="relative lg:min-h-[70vh] mt-40 lg:mt-0 flex justify-center items-center">
      <Image
        src={"/assets/svgs/newsletter-bg.svg"}
        alt=""
        width={1000}
        height={1000}
        className="absolute -z-20 hidden lg:block"
      />
      <div className="lg:hidden w-full h-[250px] bg-[#DFD7F9] absolute -z-10 rounded-xl rounded-tl-[5rem]">
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
        <h3 className="p-5  lg:text-3xl font-medium text-[#5E6282] text-center lg:px-28">
          Subscribe to get information, latest news and other interesting offers
          about Jadoo
        </h3>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-2 lg:gap-4 px-5 lg:px-0">
          <div className="flex justify-center items-center">
            <Image
              src={"/assets/svgs/mail.svg"}
              alt=""
              width={20}
              height={20}
              className="rounded-l-lg pl-5 pr-2 py-3 w-12 h-12 bg-white"
            />
            <input
              className="h-12 w-full rounded-r-lg outline-none pl-2 text-[#39425D]"
              placeholder="Your email"
            />
          </div>
          <NewsletterDialog />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
