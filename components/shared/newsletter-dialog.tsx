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
      <DialogTrigger className="h-12 w-full rounded-lg bg-gradient-to-b from-[#FF946D] to-[#FF7D68] text-white transition-all duration-150 hover:scale-105 hover:bg-gradient-to-b hover:from-[#FF946D]/95 hover:to-[#FF7D68]/95 active:scale-100 lg:w-auto lg:px-5">
        Subscribe
      </DialogTrigger>
      <DialogContent className="w-[300px] overflow-hidden rounded-xl bg-white lg:h-auto lg:w-auto">
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
          className="absolute -right-1 -top-1 -z-30"
        />
      </DialogContent>
    </Dialog>
  );
};

export default NewsletterDialog;
