import React from "react";
import Logo from "./Logo";
import { X } from "lucide-react";
import Link from "next/link";
import {headerData}  from "../constants/data";
import { usePathname } from "next/navigation";
import SocialMedia from "./SocialMedia";
import { useOutsideClick } from "@/hooks";
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}
const SideMenu: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
    const pathName = usePathname();
    const siderbarRef = useOutsideClick<HTMLDivElement>(onClose);
  return (
    <div
      className={`fixed inset-y-0 h-screen left-0 z-50 w-full bg-black/50 text-white/80 shadow-xl ${isOpen ? "translate-x-0" : "-translate-x-full"} hoverEffect`}
    >
      <div ref={siderbarRef} className="min-w-72 max-w-76 bg-black h-screen p-10 border-r border-r-shop_light_green flex flex-col gap-6">
        <div className="flex items-center justify-between gap-5">
          <Logo className="text-white" spanDesign="group-hover:text-white" />
          <button className="hover:text-shop_light_green hoverEffect" onClick={onClose}>
            <X />
          </button> 
        </div>
        <div className="flex flex-col space-y-3.5 font-semibold tracking-wide">
            {headerData.map((item) => (
              <Link key={item?.title} href={item?.href} className={`hover:text-shop_light_green hoverEffect ${pathName === item?.href && "text-shop_light_green"}`}>
                {item?.title}
              </Link>
            ))}
        </div>
        <SocialMedia/>
      </div>
    </div>
  );
};

export default SideMenu;
