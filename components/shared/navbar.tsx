"use client";

import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronDown, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { languageList, navList } from "@/constants";

const Navbar = () => {
  const [selectedLanguage, setSelectedLanguage] = React.useState("EN");
  return (
    <nav>
      <div className="flex justify-center">
        <div className="hidden h-[10vh] w-full max-w-6xl items-center justify-between lg:flex">
          <div>
            <Image
              src={"/assets/svgs/logo.svg"}
              alt="Jadoo logo"
              width={80}
              height={80}
            />
          </div>
          <div className="flex items-center justify-between gap-10 text-xs">
            <ul className="flex gap-10">
              {navList.map((item) => (
                <li key={item}>
                  <Link href={"#"} className="hover:text-[#14183E]">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="space-x-4">
              <Button
                variant={"ghost"}
                size={"sm"}
                className="hover:bg-[#F1A501] hover:text-white active:bg-[#F1A501]/90"
              >
                Login
              </Button>
              <Button
                variant={"outline"}
                size={"sm"}
                className="border-[#212832] shadow-none hover:border-[#DF6951] hover:bg-[#DF6951] hover:text-white active:bg-[#DF6951]/90"
              >
                Sign up
              </Button>
            </div>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1">
                  <p>{selectedLanguage}</p>
                  <ChevronDown size={18} />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {languageList.map((item) => (
                    <DropdownMenuItem
                      key={item}
                      className="text-xs"
                      onClick={() => setSelectedLanguage(item)}
                    >
                      {item}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-[10vh] justify-between px-5 lg:hidden">
        <Image
          src={"/assets/svgs/logo.svg"}
          alt="Jadoo logo"
          width={80}
          height={80}
        />
        <Sheet>
          <SheetTrigger>
            <Menu size={25} />
          </SheetTrigger>
          <SheetContent className="bg-white">
            <SheetHeader>
              <SheetTitle>
                <Image
                  src={"/assets/svgs/logo.svg"}
                  alt="Jadoo logo"
                  width={80}
                  height={80}
                />
              </SheetTitle>
            </SheetHeader>
            <div className="mt-10 space-y-4">
              <ul className="space-y-2">
                {navList.map((item) => (
                  <li key={item}>
                    <Link href={"#"}>{item}</Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-2">
                <Button variant={"ghost"}>Login</Button>
                <Button variant={"outline"}>Sign up</Button>
              </div>
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex h-9 w-full items-center justify-between rounded-md border px-4 py-2 shadow-sm">
                    <p>{selectedLanguage}</p>
                    <ChevronDown size={18} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    {languageList.map((item) => (
                      <DropdownMenuItem
                        key={item}
                        onClick={() => setSelectedLanguage(item)}
                      >
                        {item}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
