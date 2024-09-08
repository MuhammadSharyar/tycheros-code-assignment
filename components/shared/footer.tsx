import { quickLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="mt-20 flex min-h-[50vh] flex-col items-center justify-center gap-16 px-5 lg:mt-0">
      <div className="grid grid-cols-3 place-items-center gap-10 lg:grid-cols-7 lg:gap-4 lg:px-28">
        <div className="col-span-3 space-y-5 lg:col-span-2">
          <Image
            src={"/assets/svgs/footer-logo.svg"}
            alt="Jadoo."
            width={130}
            height={130}
          />
          <p className="w-[80%] text-xs text-[#5E6282]">
            Book your trip in minute, get full Control for much longer.
          </p>
        </div>
        {quickLinks.map((quickLink) => (
          <div className="col-span-1 space-y-3" key={quickLink.heading}>
            <h5 className="text-sm font-medium text-[#080809]">
              {quickLink.heading}
            </h5>
            <ul className="space-y-2 text-xs text-[#5E6282]">
              {quickLink.links.map((link) => (
                <li key={link}>
                  <Link
                    href={"#"}
                    className="transition-all duration-150 hover:text-[#14183E]"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="col-span-3 w-full space-y-3 lg:col-span-2 lg:w-auto">
          <div className="flex gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg shadow-[#E4E4E4] transition-all hover:scale-125">
              <Image
                src={"/assets/svgs/facebook.svg"}
                alt="Facebook"
                width={7}
                height={7}
                className="text-black"
              />
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-bl from-[#B8D2F1] via-[#C963E8] to-[#BAD0F1] shadow-lg shadow-[#E4E4E4] transition-all hover:scale-125">
              <Image
                src={"/assets/svgs/instagram.svg"}
                alt="Facebook"
                width={15}
                height={15}
                className="text-black"
              />
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg shadow-[#E4E4E4] transition-all hover:scale-125">
              <Image
                src={"/assets/svgs/twitter.svg"}
                alt="Facebook"
                width={11}
                height={11}
                className="text-black"
              />
            </div>
          </div>
          <p className="text-[#5E6282]">Discover our app</p>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 rounded-full bg-black px-3 py-1.5 text-white">
              <Image
                src={"/assets/svgs/google-play.svg"}
                alt=""
                width={15}
                height={15}
              />
              <div className="text-left">
                <h6 className="text-[7px] font-semibold">GET IT ON</h6>
                <p className="text-[7px] font-light">GOOGLE PLAY</p>
              </div>
            </button>
            <button className="flex items-center gap-2 rounded-full bg-black px-3 py-1 text-white">
              <Image
                src={"/assets/svgs/apple.svg"}
                alt=""
                width={15}
                height={15}
              />
              <div className="text-left">
                <h6 className="text-[6px]">Available on the</h6>
                <p className="text-[8px] font-semibold">Apple Store</p>
              </div>
            </button>
          </div>
        </div>
      </div>
      <p className="pb-10 text-center text-xs text-[#5E6282] lg:pb-0">
        All rights reserved@jadoo.co
      </p>
    </section>
  );
};

export default Footer;
