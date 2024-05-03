import React from "react";
import { appleImg, searchImg } from "../utils/assets";

const Navbar = () => {
  return (
    <header>
      <nav>
        <img src={appleImg} alt="apple" width={14} height={18} />
        <div></div>
        <div>
          <img src={searchImg} alt="search" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
