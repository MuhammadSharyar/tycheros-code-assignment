import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

const NewsletterDialog = () => {
  return (
    <Dialog>
      <DialogTrigger className="w-full text-white rounded-lg lg:px-5 lg:w-auto bg-gradient-to-b from-[#FF946D] to-[#FF7D68] h-12 hover:bg-gradient-to-b hover:from-[#FF946D]/95 hover:to-[#FF7D68]/95 hover:scale-105 active:scale-100 duration-150 transition-all">
        Subscribe
      </DialogTrigger>
      <DialogContent className="bg-white w-[300px] lg:w-auto lg:h-auto rounded-xl overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-[#14183E]">
            Welcome to the Jadoo Community!
          </DialogTitle>
        </DialogHeader>
        <p className="whitespace-break-spaces text-justify text-sm text-[#5E6282]">
          {`Thank you for subscribing! We're excited to have you on board. Look out for our latest updates, exclusive content, and valuable insights delivered right to your inbox.\n\n`}
          <span className="font-medium text-[#14183E]">Stay tuned!</span>
        </p>
        <Image
          src={"/assets/svgs/decore.svg"}
          alt=""
          width={200}
          height={200}
          className="absolute -top-1 -right-1 -z-30"
        />
      </DialogContent>
    </Dialog>
  );
};

export default NewsletterDialog;
