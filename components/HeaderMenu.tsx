"use client";

import { headerDate } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const HeaderMenu = () => {
const pathName = usePathname();
console.log(pathName);
  return (
    <div className="hidden md:inline-flex w-1/3 items-center gap-7 text-sm capitalize font-semibold text-lightColor">
      {headerDate?.map((item) => (
        <Link
          key={item?.title}
          href={item.href}
          className={`hover:text-shop_light_green hoverEffect relative group ${pathName === item?.href ? 'text-shop_light_green' : ''}`}
        >
          {item?.title}

          <span
            className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-shop_light_green group-hover:w-1/2 hoverEffect group-hover:left-0 ${pathName === item?.href && 'w-1/2'}`}
          />
          <span
            className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-shop_light_green group-hover:w-1/2 hoverEffect group-hover:right-0  ${pathName === item?.href && 'w-1/2'}`}
          />
        </Link>
      ))}
    </div>
  );
};

export default HeaderMenu;
