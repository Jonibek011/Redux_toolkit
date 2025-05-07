import { Form, Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GrCatalogOption } from "react-icons/gr";

//image imports
import image from "../assets/proxy-image.jpg";
//react imports
import { useEffect, useState } from "react";

//redux useselector
import { useSelector } from "react-redux";

const getDataFromLocal = () => {
  return localStorage.getItem("darkMode") || "light";
};

function Navbar() {
  const { likedImages, allProducts } = useSelector((state) => state.Liked);
  const [theme, setTheme] = useState(getDataFromLocal());

  const makeDarkMode = () => {
    const newTheme = theme == "light" ? "dracula" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div>
      <div className="hidden md:flex w-full p-[3%] md:p-1 xl:p-0 bg-gray-200">
        <div className="    hidden md:flex w-full max-w-6xl mx-auto justify-between h-[30px] gap-0 xl:gap-5 ">
          <ul className="flex xl:gap-5 text-gray-600 text-[15px] font-semibold justify-between items-center w-full max-w-4xl">
            <li className="flex justify-center items-center gap-1">
              <CiLocationOn /> Fergana <MdKeyboardArrowDown />
            </li>
            <li className="md:text-[12px] lg:text-[14px]">
              Topshirish punktlari
            </li>
            <li className="text-gray-300 md:text-[12px] lg:text-[14px]">
              <span className="text-purple-500">Sotuvchi bo'lish</span> |{" "}
              <span className="text-purple-500">
                Topshirish punktini ochish
              </span>
            </li>
            <li className="md:text-[12px] lg:text-[14px]">Savol-jvob</li>
            <li className="md:text-[12px] lg:text-[14px]">Buyurtmalarim</li>
          </ul>
          <div className="flex gap-2 items-center ml-2">
            <div className="h-6 w-6 rounded-full overflow-hidden">
              <img src={image} alt="" className="w-7 h-7" />
            </div>
            <span className="font-semibold text-[14px]">O`zbekcha</span>
          </div>
        </div>
      </div>
      {/* ========================= Header ============================================================== */}
      <header className="max-w-6xl mx-auto">
        <div className="navbar flex justify-between bg-white h-[9vh] ">
          <Link to="/">
            {" "}
            <div className="flex justify-between gap-2 ">
              <img
                src="./Icon.jpeg"
                alt=""
                className="w-7 md:w-10 rounded-full"
              />
              <h1 className="font-bold text-violet-700 text-xl md:text-2xl logo">
                uzum market
              </h1>
            </div>
          </Link>

          <div className="search min-w-[40%] hidden md:flex gap-4">
            <div className="catalog px-3 bg-indigo-100 w-[23%] h-12 rounded-md flex items-center justify-center gap-1">
              <span>
                <GrCatalogOption />
              </span>
              <p className="font-semibold text-purple-600">Katalog</p>
            </div>
            <Form className="w-full">
              <label className="input rounded-md bg-transparent input-bordered flex items-center gap-2 w-full">
                <input
                  type="text"
                  className="grow mx-auto min-w-[40%] bg-transparent"
                  placeholder="Search"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70 "
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </Form>
          </div>

          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label className="swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input
                  onClick={makeDarkMode}
                  type="checkbox"
                  className="theme-controller "
                  value="synthwave"
                />

                {/* sun icon */}
                <svg
                  className="swap-off h-6 w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                {/* moon icon */}
                <svg
                  className="swap-on h-6 w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>

              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <Link to="/likedImages">
                    <FaRegHeart className="w-4 h-4 md:w-5 md:h-5" />
                  </Link>
                  <span className="badge badge-xs sm:badge-sm indicator-item">
                    {likedImages.length}
                  </span>
                </div>
              </div>

              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <Link to="/savat">
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 sm:h-5 sm:w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="badge badge-xs sm:badge-sm indicator-item">
                      {allProducts}
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-7 sm:w-8 md:w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Form className="w-full md:hidden">
          <label className="input rounded-md bg-transparent input-bordered flex items-center h-8 gap-2 w-full max-w-sm mx-auto mb-2">
            <input
              type="text"
              className="grow mx-auto min-w-[40%] bg-transparent input-sm"
              placeholder="Search"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70 "
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </Form>

        <div className="catalog w-full flex flex-wrap justify-between px-2 md:gap-2 lg:gap-6 h-[5vh] md:h-[3vh]    overflow-auto">
          <div className="group  inline-flex justify-center items-center flex-col text-[11px] md:text-[12px] lg:text-[15px] font-semibold text-gray-500 ">
            <Link to="/">All</Link>
            <span className="inline-block w-0 transition-all duration-200 group-hover:w-full h-[2px] rounded-full  bg-black"></span>
          </div>
          <div className="group inline-flex justify-center items-center flex-col text-[11px] md:text-[12px] lg:text-[15px] font-semibold text-gray-500">
            <Link to="smartphones">Smartphone</Link>
            <span className="inline-block w-0 transition-all duration-200 group-hover:w-full h-[2px] rounded-full  bg-black"></span>
          </div>

          <div className="group inline-flex justify-center items-center flex-col text-[11px] md:text-[12px] lg:text-[15px] font-semibold text-gray-500">
            <Link to="/sunglasses">Sunglasses</Link>
            <span className="inline-block w-0 transition-all duration-200 group-hover:w-full h-[2px] rounded-full  bg-black"></span>
          </div>

          <div className="group inline-flex justify-center items-center flex-col text-[11px] md:text-[12px] lg:text-[15px] font-semibold text-gray-500">
            <Link to="/beauty">Beauty</Link>
            <span className="inline-block w-0 transition-all duration-200 group-hover:w-full h-[2px] rounded-full  bg-black"></span>
          </div>

          <div className="group inline-flex justify-center items-center flex-col text-[11px] md:text-[12px] lg:text-[15px] font-semibold text-gray-500">
            <Link to="/foods">Foods</Link>
            <span className="inline-block w-0 transition-all duration-200 group-hover:w-full h-[2px] rounded-full  bg-black"></span>
          </div>

          <div className="group inline-flex justify-center items-center flex-col text-[11px] md:text-[12px] lg:text-[15px] font-semibold text-gray-500">
            <Link to="/furniture">Furniture</Link>
            <span className="inline-block w-0 transition-all duration-200 group-hover:w-full h-[2px] rounded-full  bg-black"></span>
          </div>

          <div className="group inline-flex justify-center items-center flex-col text-[11px] md:text-[12px] lg:text-[15px] font-semibold text-gray-500">
            <Link to="/clothe">Men's dresses</Link>
            <span className="inline-block w-0 transition-all duration-200 group-hover:w-full h-[2px] rounded-full  bg-black"></span>
          </div>
          <div className="group inline-flex justify-center items-center flex-col text-[11px] md:text-[12px] lg:text-[15px] font-semibold text-gray-500">
            <Link to="/wclothe">Women's dresses</Link>
            <span className="inline-block w-0 transition-all duration-200 group-hover:w-full h-[2px] rounded-full  bg-black"></span>
          </div>

          <div className="group inline-flex justify-center items-center flex-col text-[11px] md:text-[12px] lg:text-[15px] font-semibold text-gray-500">
            <Link to="/sport">Sport</Link>
            <span className="inline-block w-0 transition-all duration-200 group-hover:w-full h-[2px] rounded-full  bg-black"></span>
          </div>

          <div className="group inline-flex justify-center items-center flex-col text-[11px] md:text-[12px] lg:text-[15px] font-semibold text-gray-500">
            <Link to="/chicken">Kitchen</Link>
            <span className="inline-block w-0 transition-all duration-200 group-hover:w-full h-[2px] rounded-full  bg-black"></span>
          </div>
          <div className="group inline-flex justify-center   text-[11px] md:text-[12px] lg:text-[15px] font-semibold text-gray-500">
            <Link to="/chicken" className="flex items-center gap-1">
              yana{" "}
              <span>
                <MdKeyboardArrowDown className="w-5 h-5" />
              </span>
            </Link>
            <span className="inline-block w-0 transition-all duration-200 group-hover:w-full h-[2px] rounded-full  bg-black"></span>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
