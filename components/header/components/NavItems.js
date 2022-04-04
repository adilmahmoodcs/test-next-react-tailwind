import Link from "next/link";

export const NavItem = ({ children, href }) => {
  return (
    <Link href={href}>
      <a className="px-3 py-2 border-2 border-transparent rounded-md cursor-pointe text-white text-xs xl:text-sm font-medium hover:border-white active:bg-white active:text-gray-700 transition duration-300">
        {children}
      </a>
    </Link>
  );
};

export const MobileNavItem = ({ children, href }) => {
  return (
    <li className="">
      <Link href={href}>
        <a className="block text-sm px-2 py-4 hover:bg-primary-500 transition duration-300">
          {children}
        </a>
      </Link>
    </li>
  );
};
