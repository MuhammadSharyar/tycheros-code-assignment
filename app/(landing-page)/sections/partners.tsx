import Image from "next/image";
import React from "react";

const Partners = () => {
  return (
    <section className="flex min-h-[20vh] flex-wrap items-center justify-center gap-10 lg:min-h-[50vh] lg:gap-20">
      <Image
        src={"/assets/images/partner-1.png"}
        alt=""
        width={100}
        height={100}
      />
      <Image
        src={"/assets/images/partner-2.png"}
        alt=""
        width={100}
        height={100}
      />
      <div className="rounded-lg px-7 py-5 shadow-2xl shadow-[#E1E6E9]/50">
        <Image
          src={"/assets/images/partner-3.png"}
          alt=""
          width={120}
          height={100}
        />
      </div>
      <Image
        src={"/assets/images/partner-4.png"}
        alt=""
        width={120}
        height={100}
      />
      <Image
        src={"/assets/images/partner-5.png"}
        alt=""
        width={90}
        height={100}
      />
    </section>
  );
};

export default Partners;
