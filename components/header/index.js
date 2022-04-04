import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { MobileNavItem, NavItem } from "./components/NavItems";

import menuIcon from "../../assets/menu-black.svg";
import { Logo } from "../../assets/logo.js";

const navItems = [
  { href: "/", name: "About" },
  { href: "/", name: "Investor Room" },
  { href: "/", name: "Admin Room" },
  { href: "/", name: "Pricing" },
  { href: "/", name: "Careers" },
  { href: "/", name: "Contact" },
];

export default function Header() {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen((isOpen) => !isOpen);
  };

  return (
    <header
      className={`${
        isNavOpen ? "bg-white" : "xl:bg-primary xl:bg-opacity-10"
      } absolute w-full`}
    >
      <nav className="flex px-5 md:px-14 lg:px-20 h-20">
        <Link href="/">
          <a className="my-auto">
            <Logo color={isNavOpen ? "black" : "white"} />
          </a>
        </Link>

        <div className="hidden md:flex items-center gap-1 lg:ml-9">
          {navItems.map((item) => (
            <NavItem href={item.href} key={item.name}>
              {item.name}
            </NavItem>
          ))}
        </div>

        <div className="hidden md:flex items-center justify-end flex-1">
          <button className="bg-white text-dark-800 rounded-md px-6 py-3 float-right text-md font-medium hover:bg-gray-300 active:bg-gray-400 transition duration-300">
            T360 DaaS
          </button>
        </div>

        <div className="md:hidden flex-1 flex items-center justify-end">
          <button
            className="outline-none flex rounded-full mobile-menu-button active:bg-slate-200 transition duration-300"
            onClick={toggleNav}
          >
            <Image src={menuIcon} alt="" />
          </button>
        </div>
      </nav>

      <div
        className={`${
          isNavOpen ? "" : "hidden"
        } bg-white h-screen z-10 absolute top-20 w-screen`}
      >
        <ul className="pt-3 px-3 border-t border-t-gray-600">
          {navItems.map((item) => (
            <MobileNavItem key={item.name} href={item.href}>
              {item.name}
            </MobileNavItem>
          ))}
        </ul>

        <div className="flex justify-center">
          <button className="bg-primary text-white rounded-md w-5/6 py-3 float-right text-md font-medium active:bg-primary-700 transition duration-100">
            T360 DaaS
          </button>
        </div>
      </div>
    </header>
  );
}
