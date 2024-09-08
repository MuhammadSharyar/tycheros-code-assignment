import Image from "next/image";
import React from "react";

const Partners = () => {
  return (
    <section className="min-h-[20vh] lg:min-h-[50vh] flex flex-wrap gap-10 lg:gap-20 justify-center items-center">
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
      <div className="py-5 px-7 rounded-lg shadow-2xl shadow-[#E1E6E9]/50">
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
