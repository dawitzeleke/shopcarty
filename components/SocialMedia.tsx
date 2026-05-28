"use client";

import Link from "next/link";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  FaYoutube,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaSlack,
} from "react-icons/fa";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

const socialMedia = [
  {
    title: "Youtube",
    href: "https://www.youtube.com",
    icon: <FaYoutube />,
  },
  {
    title: "Github",
    href: "https://www.github.com/dawitzeleke",
    icon: <FaGithub />,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/dawit-zeleke/",
    icon: <FaLinkedin />,
  },

  {
    title: "Facebook",
    href: "https://www.facebook.com",
    icon: <FaFacebook />,
  },
  {
    title: "Slack",
    href: "https://www.slack.com",
    icon: <FaSlack />,
  },
];

const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3.5", className)}>
        {socialMedia.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
              <a
                key={item?.title}
                href={item?.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn("p-2 border rounded-full hover:text-white hover:border-shop_light_green", iconClassName)}
              >
                {item?.icon}
              </a>
            </TooltipTrigger>
            <TooltipContent className={cn("bg-white text-darkColor font-semibold border border-shop_light_green")}>
                {item?.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;
