import Link from "next/link";
import React from "react";
import FooterLogo from "../../assets/FooterLogo";
import { Logo } from "../../assets/logo";
import FooterBottom from "./FooterBottom";

const productMenu = [
  { name: "Overview", href: "/" },
  { name: "Feature", href: "/" },
];
const companyMenu = [
  { name: "About", href: "/" },
  { name: "Careers", href: "/" },
  { name: "Contact", href: "/" },
];
const supportMenu = [
  { name: "Help Center", href: "/" },
  { name: "Terms & Services", href: "/" },
  { name: "Privacy Policy", href: "/" },
];

export default function Footer() {
  return (
    <div className="bg-dark-800 bg-[url('../assets/footer-logo.svg')] bg-no-repeat bg-[center_left_-7rem] relative px-5 md:px-14 lg:px-20">
      <div className="pt-24 pb-44 flex flex-col md:flex-row gap-12">
        <div className="flex-1">
          <Logo />
        </div>

        <div className="flex-1 flex gap-x-28 gap-y-2 sm:gap-x-12 lg:gap-x-36 flex-wrap md:flex-nowrap">
          <MenuWidget heading="Product" list={productMenu} />
          <MenuWidget heading="Company" list={companyMenu} />
          <MenuWidget heading="Support" list={supportMenu} />
        </div>
      </div>

      <FooterBottom />
    </div>
  );
}

const MenuWidget = ({ heading, list }) => {
  return (
    <div>
      <h6 className="text-xl font-medium text-white">{heading}</h6>

      <ul className="mt-8 flex flex-col gap-2">
        {list.map((item) => (
          <li key={item.name}>
            <Link href={item.href}>
              <a className="text-white text-base font-normal">{item.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
