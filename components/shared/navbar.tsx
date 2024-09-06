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

const navList = ["Destinations", "Hotels", "Flights", "Bookings"];
const languageList = ["EN", "FR", "ES", "DE"];

const Navbar = () => {
  const [selectedLanguage, setSelectedLanguage] = React.useState("EN");

  return (
    <nav>
      <div className="flex justify-center">
        <div className="hidden md:flex justify-between items-center h-14 max-w-6xl w-full">
          <div>
            <Image
              src={"/assets/svgs/logo.svg"}
              alt="Jadoo logo"
              width={80}
              height={80}
            />
          </div>
          <div className="flex justify-between items-center text-xs gap-10">
            <ul className="flex gap-10">
              {navList.map((item) => (
                <li key={item}>
                  <Link href={"#"}>{item}</Link>
                </li>
              ))}
            </ul>
            <div className="space-x-4">
              <Button variant={"ghost"} size={"sm"}>
                Login
              </Button>
              <Button variant={"outline"} size={"sm"}>
                Sign up
              </Button>
            </div>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex gap-1 items-center">
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
      <div className="md:hidden flex justify-between border-b h-14 px-5">
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
            <div className="space-y-4 mt-10">
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
                  <DropdownMenuTrigger className="w-full flex justify-between items-center border h-9 px-4 py-2 rounded-md shadow-sm">
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
