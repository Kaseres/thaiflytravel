"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// Image
import LOGO from "@/assets/LogoKyoberus.webp"
// Constant
import { MENU_TITLE } from "@/constants/intex";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const menus = [
    {
      title: MENU_TITLE["HOME"],
      path: "/",
      icon: "",
    },
    {
      title: MENU_TITLE["OUTBOUND"],
      path: "/outbound",
      icon: "",
    },
    {
      title: MENU_TITLE["TICKET"],
      path: "/ticket",
      icon: "",
    },
    {
      title: MENU_TITLE["GROUPTOUR"],
      path: "/grouptour",
      icon: "",
    },
    {
      title: MENU_TITLE["TEAMBUILDING"],
      path: "/teambuilding",
      icon: "",
    },
    {
      title: MENU_TITLE["ABOUT"],
      path: "/about",
      icon: "",
    },
    {
      title: MENU_TITLE["ARTICLE"],
      path: "/article",
      icon: "",
    },
  ];

  return (
    <div className="Header bg-blue-700 text-white shadow fixed w-full top-0">
      <div className="md:container mx-auto">
        <nav className="flex flex-wrap items-center justify-between p-4">
          <div className="flex lg:order-2 w-auto lg:w-4/5">
            <a
              className="text-md font-semibold font-heading mr-5"
              href="#"
              data-config-id="brand"
            >
              <Image src={LOGO} alt="" className="h-[50px] w-[auto]" />
            </a>
            <div className="navbar-menu hidden lg:block w-full text-lg font-heading py-3 px-4">
              {menus.map((item) => (
                <>
                  <Link href="/" className="mx-2 hover:text-gray-200">
                    {item.title}
                  </Link>
                </>
              ))}
            </div>
          </div>
          <div className="block lg:hidden">
            <button className="navbar-burger flex items-center py-2 px-3 text-white rounded border border-white">
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
          <div className="navbar-menu hidden lg:order-3 lg:block w-full lg:w-1/5 lg:text-right">
          <button className="bg-white text-gray-500 hover:text-blue-700 py-2 px-4 rounded-lg">{MENU_TITLE["CONTACT"]}</button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
