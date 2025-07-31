import React from "react";
import Link from "next/link";

const MenuOverlay = ({ links }) => {
  return (
    <div className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-[#0f0f0f]/95 backdrop-blur-md z-40">
      <ul className="flex flex-col items-center py-4 space-y-4">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.path}
              className=" text-black dark:text-white hover:text-primary-400 text-lg"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;
