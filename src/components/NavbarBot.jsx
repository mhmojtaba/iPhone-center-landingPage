import { navLists } from "../constants";

const NavbarBot = ({ activeTab }) => {
  const tab = activeTab();
  console.log(tab);

  return (
    <>
      <header className="sm:hidden py-5 sm:px-10 px-5 ">
        <nav className="flex justify-center items-center">
          <div className=" flex justify-center items-center !fixed bottom-10 z-10 w-5/6 mx-auto ">
            <div
              className="text-white w-96 flex h-16 relative
               bg-gray/80 rounded-2xl items-center justify-center"
            >
              {navLists.map((item) => {
                return (
                  <ul key={item.label} className="">
                    {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                    <li className="relative group w-[70px] h-[70px] z-10 icon-list">
                      <a
                        href={item.link}
                        className="w-full flex relative items-center 
                        font-semibold justify-center flex-col text-center"
                      >
                        <span
                          className={`relative block icon text-center  ${
                            tab === item.id ? "-translate-y-[32px]" : ""
                          }`}
                        >
                          <img
                            className="w-2/5 inline-flex"
                            src={item.icon}
                            alt="icon"
                          />
                        </span>
                        <span
                          className={`absolute 
                          translate-y-5
                         opacity-0 font-normal text-xs text-gray-50 icon-text ${
                           tab === item.id ? "translate-y-2 opacity-100" : ""
                         }`}
                        >
                          {item.label}
                        </span>
                      </a>
                    </li>
                    <div
                      className={`${
                        tab === item.id
                          ? "indicator border-black border-[5px]"
                          : ""
                      }`}
                    />
                  </ul>
                );
              })}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavbarBot;
