import React, { useState } from "react";
import { logoXpro } from "../assets";
import { useEffect } from "react";

const Navbar = () => {

  const [openOne, setOpenOne] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  const [openOneMobile, setOpenOneMobile] = useState(false);
  const [openTwoMobile, setOpenTwoMobile] = useState(false);

  const handleOpenMenuOne = () => {
    setOpenOne(!openOne);
  };

  const handleOpenMenuTwo = () => {
    setOpenTwo(!openTwo);
  };

  const handleOpenMenuMobile = () => {
    setOpenMobile(!openMobile);
  };

  const handleOpenMenuOneMobile = () => {
    setOpenOneMobile(!openOneMobile);
  };

  const handleOpenMenuTwoMobile = () => {
    setOpenTwoMobile(!openTwoMobile);
  };

 useEffect(() => {
    
    if (openOne) {
      setOpenOne(true);
      setOpenTwo(false);
    } 
  }, [openOne]);

  useEffect(() => {
   
     if (openTwo) {
      setOpenTwo(true);
      setOpenOne(false);
    }
  }, [openTwo]);
 
  
  
 

  return (
    <nav className="fixed top-0 w-full py-[1.4rem] px-4 lg:px-[8.2rem] bg-gradient-to-b from-blue-500/80 from-0% via-white/10 via-[99%] to-gray-700/80 to-100% backdrop-filter backdrop-blur shadow-[0px_6px_6px_0px_rgba(0,0,0,0.25)] z-[99999]">
      <div className="flex items-center justify-between lg:justify-start lg:gap-[8.25rem]">
        {/* Start Logo */}
        <img className="w-[4.5rem]" src={logoXpro} alt="Logo X-Project" />
        {/* End Logo */}

        <ul className="hidden lg:flex gap-[3rem] text-white font-inter font-medium">
          {/* Start Home */}
          <li className=" inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100">
            <a href="/">Home</a>
          </li>
          {/* End Home */}

          {/* Start Tech Genius */}
          <li className="relative  inline-block transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100">
            <button className="flex items-center gap-[0.6rem]" onClick={handleOpenMenuOne}>
              Tech Genius
              <svg className="w-5 h-5" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <g id="icons/regular/chevron-up-s">
                  <path
                    id="Icon"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.4114 7.74408C14.7368 7.41864 15.2645 7.41864 15.5899 7.74408C15.9153 8.06951 15.9153 8.59715 15.5899 8.92259L10.5899 13.9226C10.2645 14.248 9.73683 14.248 9.4114 13.9226L4.4114 8.92259C4.08596 8.59715 4.08596 8.06951 4.4114 7.74408C4.73683 7.41864 5.26447 7.41864 5.58991 7.74408L10.0007 12.1548L14.4114 7.74408Z"
                    fill="currentColor"
                  />
                </g>
              </svg>
            </button>
            {/* Start Dropdown Tech Genius */}
            {openOne ? (
              <ul className="absolute bg-gradient-to-b from-blue-500/80 from-0% via-white/10 via-[99%] to-gray-700/80 to-100%  text-white p-[0.9rem] top-12 rounded backdrop-blur-xl shadow-[0px_6px_6px_0px_rgba(0,0,0,0.25)]">
                <li className="w-[15rem] hover:bg-gray-50/5 hover:backdrop-blur rounded">
                  <a className="block w-full h-full py-[0.9rem] px-[0.6rem]" href="/Bootcamp-UIUX">
                    Bootcamp UI/UX Design
                  </a>
                </li>
                <li className="w-[15rem] hover:bg-gray-50/5 hover:backdrop-blur rounded">
                  <a className="block w-full h-full py-[0.9rem] px-[0.6rem]" href="/Webinar-BMC">
                    Webinar BMC
                  </a>
                </li>
              </ul>
            ) : null}
            {/* End Dropdown Tech Genius */}
          </li>
          {/* End Tech Genius */}

          {/* Start Championship */}
          <li className="relative  inline-block transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100">
            <button className="flex items-center gap-[0.6rem]" onClick={handleOpenMenuTwo}>
              Championship
              <svg className="w-5 h-5" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <g id="icons/regular/chevron-up-s">
                  <path
                    id="Icon"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.4114 7.74408C14.7368 7.41864 15.2645 7.41864 15.5899 7.74408C15.9153 8.06951 15.9153 8.59715 15.5899 8.92259L10.5899 13.9226C10.2645 14.248 9.73683 14.248 9.4114 13.9226L4.4114 8.92259C4.08596 8.59715 4.08596 8.06951 4.4114 7.74408C4.73683 7.41864 5.26447 7.41864 5.58991 7.74408L10.0007 12.1548L14.4114 7.74408Z"
                    fill="currentColor"
                  />
                </g>
              </svg>
            </button>
            {/* Start Dropdown Tech Genius */}
            {openTwo ? (
              <ul className="absolute bg-gradient-to-b from-blue-500/80 from-0% via-white/10 via-[99%] to-gray-700/80 to-100%  text-white p-[0.9rem] top-12 rounded backdrop-blur-xl shadow-[0px_6px_6px_0px_rgba(0,0,0,0.25)]">
                <li className="w-[15rem] hover:bg-gray-50/5 hover:backdrop-blur rounded">
                  <a className="block w-full h-full py-[0.9rem] px-[0.6rem]" href="/UIUX-Competition">
                    UI/UX Design
                  </a>
                </li>
                <li className="w-[15rem] hover:bg-gray-50/5 hover:backdrop-blur rounded">
                  <a className="block w-full h-full py-[0.9rem] px-[0.6rem]" href="/Essay-Competition">
                    Essay
                  </a>
                </li>
                <li className="w-[15rem] hover:bg-gray-50/5 hover:backdrop-blur rounded">
                  <a className="block w-full h-full py-[0.9rem] px-[0.6rem]" href="/Photo-Competition">
                    Photography
                  </a>
                </li>
                <li className="w-[15rem] hover:bg-gray-50/5 hover:backdrop-blur rounded">
                  <a className="block w-full h-full py-[0.9rem] px-[0.6rem]" href="/BMC-Competition">
                    Business Model Canvas
                  </a>
                </li>
              </ul>
            ) : null}
            {/* End Dropdown Tech Genius */}
          </li>
          {/* End Championship */}

          {/* Start Techno Symphony */}
          <li className=" inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100">
            <a href="/Techno-Symphony">Techno Symphony</a>
          </li>
          {/* End Techno Symphony */}

          {/* Start About Us */}
          <li className=" inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100">
            <a href="/About">About Us</a>
          </li>
          {/* End About Us */}
        </ul>

        {/* Mobile */}
        <button className="block lg:hidden" onClick={handleOpenMenuMobile}>
          {openMobile ? (
            <svg className="w-7 h-7" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z"
                fill="#FFFFFF"
              />
            </svg>
          ) : (
            <svg className="w-10 h-7" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="bar-chart-2">
                <path id="Vector" d="M20 6L10 6" stroke="#F8F9FA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path id="Vector_2" d="M20 12L4 12" stroke="#F8F9FA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path id="Vector_3" d="M20 18H14" stroke="#F8F9FA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </g>
            </svg>
          )}
        </button>
      </div>
      {openMobile ? (
        <div className="w-[16rem] h-screen absolute top-0 bottom-0 right-0 bg-gradient-to-br from-blue-500 via-blue-500 to-blue-900  backdrop-filter backdrop-blur-3xl shadow-[0px_6px_6px_0px_rgba(0,0,0,0.25)] -z-[1]">
          <ul className="mt-28 flex flex-col gap-5 text-white font-inter font-medium pl-5">
            {/* Start Home */}
            <li className="w-fit  inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100">
              <a href="/">Home</a>
            </li>
            {/* End Home */}

            {/* Start Tech Genius */}
            <li className="">
              <button
                className="flex items-center gap-[0.6rem] w-fit relative  transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100"
                onClick={handleOpenMenuOneMobile}
              >
                Tech Genius
                <svg className="w-5 h-5" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <g id="icons/regular/chevron-up-s">
                    <path
                      id="Icon"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.4114 7.74408C14.7368 7.41864 15.2645 7.41864 15.5899 7.74408C15.9153 8.06951 15.9153 8.59715 15.5899 8.92259L10.5899 13.9226C10.2645 14.248 9.73683 14.248 9.4114 13.9226L4.4114 8.92259C4.08596 8.59715 4.08596 8.06951 4.4114 7.74408C4.73683 7.41864 5.26447 7.41864 5.58991 7.74408L10.0007 12.1548L14.4114 7.74408Z"
                      fill="currentColor"
                    />
                  </g>
                </svg>
              </button>
              {/* Start Dropdown Tech Genius */}
              {openOneMobile ? (
                <ul className="flex flex-col gap-5 mt-5 ml-5">
                  <li className="w-fit relative  transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100">
                    <a href="/Bootcamp-UIUX">Bootcamp UI/UX Design</a>
                  </li>
                  <li className="w-fit relative  transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100">
                    <a href="/Webinar-BMC">Webinar BMC</a>
                  </li>
                </ul>
              ) : null}
              {/* End Dropdown Tech Genius */}
            </li>
            {/* End Tech Genius */}

            {/* Start Championship */}
            <li className="">
              <button
                className="flex items-center gap-[0.6rem] w-fit relative  transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100"
                onClick={handleOpenMenuTwoMobile}
              >
                Championship
                <svg className="w-5 h-5" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <g id="icons/regular/chevron-up-s">
                    <path
                      id="Icon"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.4114 7.74408C14.7368 7.41864 15.2645 7.41864 15.5899 7.74408C15.9153 8.06951 15.9153 8.59715 15.5899 8.92259L10.5899 13.9226C10.2645 14.248 9.73683 14.248 9.4114 13.9226L4.4114 8.92259C4.08596 8.59715 4.08596 8.06951 4.4114 7.74408C4.73683 7.41864 5.26447 7.41864 5.58991 7.74408L10.0007 12.1548L14.4114 7.74408Z"
                      fill="currentColor"
                    />
                  </g>
                </svg>
              </button>
              {/* Start Dropdown Championship */}
              {openTwoMobile ? (
                <ul className="flex flex-col gap-5 mt-5 ml-5">
                  <li className="w-fit relative  transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100">
                    <a href="/UIUX-Competition">UI/UX Design</a>
                  </li>
                  <li className="w-fit relative  transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100">
                    <a href="/Essay-Competition">Essay</a>
                  </li>
                  <li className="w-fit relative  transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100">
                    <a href="/Photo-Competition">Photography</a>
                  </li>
                  <li className="w-fit relative  transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100">
                    <a href="/BMC-Competition">Business Model Canvas</a>
                  </li>
                </ul>
              ) : null}
              {/* End Dropdown Championship */}
            </li>
            {/* End Championship */}

            {/* Start Techno Symphony */}
            <li className="w-fit  inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100">
              <a href="/Techno-Symphony">Techno Symphony</a>
            </li>
            {/* End Techno Symphony */}

            {/* Start About Us */}
            <li className="w-fit  inline-block relative transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-blue-900 hover:before:w-full hover:before:opacity-100">
              <a href="/About">About Us</a>
            </li>
            {/* End About Us */}
          </ul>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
