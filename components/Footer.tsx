import Container from "./Container";
import React from "react";
import FooterTop from "./FooterTop";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import { SubText, SubTitle } from "@/components/ui/text";
import { quickLinksData, categoriesData } from "@/constants/data";
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <Container>
        <FooterTop />
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <SubText className="text-gray-600 text-sm">
              Discover curated furniture collections at Shopcartyt, blending
              style and comfort to elevate your living spaces.
            </SubText>
            <SocialMedia
              className="text-darkColor/60"
              iconClassName="border-darkColor/60 hover:border-shop_light_green hover:text-shop_light_green"
              tooltipClassName="bg-darkColor text-white"
            />
          </div>
          <div>
            <SubTitle>Quick Links</SubTitle>
            <ul className="space-y-3 mt-4">
              {quickLinksData.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link?.href}
                    className="hover:text-shop_light_green hoverEffect font-medium"
                  >
                    {link?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SubTitle>Categories</SubTitle>
            <ul className="space-y-3 mt-4">
              {categoriesData.map((link, index) => (
                <li key={index}>
                  <Link
                    href={`/categories/${link?.href}`}
                    className="text-gray-600 hover:text-shop_light_green hoverEffect font-medium"
                  >
                    {link?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <SubTitle>Newsletter</SubTitle>
            <SubText className="text-gray-600 text-sm mt-4">
              Subscribe to our newsletter for the latest updates and exclusive
              offers.
            </SubText>
            <form className="space-y-3">
              <Input placeholder="Enter email address" type="email" required />
              <Button className="w-full">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="py-6 border-t text-center text-sm text-gray-600">
          <div> 
            &copy; {new Date().getFullYear()}{" "}
            <Logo className="text-sm"/>.
            All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
