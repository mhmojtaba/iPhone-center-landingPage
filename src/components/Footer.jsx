import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="py-5 px-5 sm:px-10">
      <div className="screen-max-width">
        <div className="">
          <p className="font-semibold text-gray text-xs ">
            More ways to shop{" "}
            <span className="underline text-blue">
              Find an apple store {""}
            </span>{" "}
            Or <span className="underline text-blue">other retailer </span>
            near You.
          </p>
          <p className="font-semibold text-gray text-xs ">
            or call 000000-000000-0000
          </p>
        </div>
        <div className="bg-neutral-700 my-5 h-[1px]" />
        <div className="flex md:flex-row flex-col items-center justify-between">
          <p className="font-semibold text-gray text-xs">
            Copyright @ 2024 Apple Inc. All right reserved.
          </p>
          <div className="flex">
            {footerLinks.map((link, index) => (
              <p
                key={link}
                className="font-semibold text-gray text-xs hover:text-white cursor-pointer"
              >
                {link}{" "}
                {index !== footerLinks.length - 1 && (
                  <span className="mx-2">|</span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
