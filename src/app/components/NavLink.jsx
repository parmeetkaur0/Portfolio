import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, title }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`text-[#181818] font-semibold text-lg dark:text-white hover:text-primary-400  dark:hover:text-primary-400 transition-all duration-300 px-3 py-2 ${
        pathname === href ? "text-primary-400" : ""
      }`}
    >
      {title}
    </Link>
  );
};

export default NavLink;
