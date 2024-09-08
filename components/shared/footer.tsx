import { quickLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="min-h-[50vh] flex flex-col justify-center items-center gap-16 mt-20 lg:mt-0 px-5">
      <div className="grid grid-cols-3 lg:grid-cols-7 gap-10 lg:gap-4 lg:px-28 place-items-center">
        <div className="space-y-5 col-span-3 lg:col-span-2">
          <Image
            src={"/assets/svgs/footer-logo.svg"}
            alt="Jadoo."
            width={130}
            height={130}
          />
          <p className="text-xs text-[#5E6282] w-[80%]">
            Book your trip in minute, get full Control for much longer.
          </p>
        </div>
        {quickLinks.map((quickLink) => (
          <div className="space-y-3 col-span-1" key={quickLink.heading}>
            <h5 className="text-sm font-medium text-[#080809]">
              {quickLink.heading}
            </h5>
            <ul className="text-[#5E6282] text-xs space-y-2">
              {quickLink.links.map((link) => (
                <li key={link}>
                  <Link
                    href={"#"}
                    className="hover:text-[#14183E] transition-all duration-150"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="space-y-3 lg:col-span-2 col-span-3 w-full lg:w-auto">
          <div className="flex gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center shadow-lg shadow-[#E4E4E4] hover:scale-125 transition-all">
              <Image
                src={"/assets/svgs/facebook.svg"}
                alt="Facebook"
                width={7}
                height={7}
                className="text-black"
              />
            </div>
            <div className="w-10 h-10 bg-gradient-to-bl from-[#B8D2F1] via-[#C963E8] to-[#BAD0F1] rounded-full flex justify-center items-center shadow-lg shadow-[#E4E4E4] hover:scale-125 transition-all">
              <Image
                src={"/assets/svgs/instagram.svg"}
                alt="Facebook"
                width={15}
                height={15}
                className="text-black"
              />
            </div>
            <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center shadow-lg shadow-[#E4E4E4] hover:scale-125 transition-all">
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
            <button className="bg-black text-white py-1.5 px-3 rounded-full flex gap-2 items-center">
              <Image
                src={"/assets/svgs/google-play.svg"}
                alt=""
                width={15}
                height={15}
              />
              <div className="text-left">
                <h6 className="font-semibold text-[7px]">GET IT ON</h6>
                <p className="font-light text-[7px]">GOOGLE PLAY</p>
              </div>
            </button>
            <button className="bg-black text-white py-1 px-3 rounded-full flex gap-2 items-center">
              <Image
                src={"/assets/svgs/apple.svg"}
                alt=""
                width={15}
                height={15}
              />
              <div className="text-left">
                <h6 className="text-[6px]">Available on the</h6>
                <p className="font-semibold text-[8px]">Apple Store</p>
              </div>
            </button>
          </div>
        </div>
      </div>
      <p className="text-center text-[#5E6282] text-xs pb-10 lg:pb-0">
        All rights reserved@jadoo.co
      </p>
    </section>
  );
};

export default Footer;
