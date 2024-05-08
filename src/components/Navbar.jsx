import { navLists } from "../constants";
import { appleImg, bagImg, searchImg } from "../utils/assets";

const Navbar = ({ activeTab }) => {
  const tab = activeTab();
  return (
    <>
      <header
        className="w-full fixed top-0
       py-5 sm:px-10 px-5 z-10 bg-[#333333]/70 backdrop-blur-sm sm:backdrop-blur-md
       flex justify-between items-center"
      >
        <nav className="flex w-full screen-max-width">
          <img src={appleImg} alt="apple" width={14} height={18} />
          <div className="flex flex-1 justify-center max-sm:hidden">
            {navLists.map((item) => {
              return (
                <a
                  href={item.link}
                  key={item.id}
                  className={`px-5 text-sm cursor-pointer text-gray hover:text-white transition-all ${
                    tab === item.id ? "text-white" : ""
                  }
                  `}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
          <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
            <img src={searchImg} alt="search" width={18} height={18} />
            <img src={bagImg} alt="bag" width={18} height={18} />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
