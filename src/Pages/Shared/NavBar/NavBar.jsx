import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaMailBulk, FaRegEnvelope, FaTimes, FaUser } from "react-icons/fa";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import Brand from "../../../Components/Brand";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [openNav, setOpenNav] = useState(false);

  const handelLogOut = () => {
    logOut().then().catch();
  };



  const navItems = [
    "Jobs", "Companies", "Service", "About"
  ] 

  return (
    <nav className={`w-full fixed bg-white md:px-10 px-2 py-2  ${ openNav && "inset-0 bg-white/20 bg-opacity-25 backdrop-blur-sm"}`}>
      <div className="flex gap-3 justify-between items-center">
        <Brand />
        <div className="md:block hidden w-auto" >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-4 md:mt-0 md:border-0 ">
            { 
              navItems.map(navItem => (
                  <li>
                    <a href="#" className="">{navItem}</a>
                  </li>
              ))}
          </ul>
        </div>   
        <form className="md:block hidden">
            <div className="flex">
                <select id="default" class=" z-10 inline-flex items-center py-2 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-full hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 ">
                    <option selected>Categories</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                </select>
                <div className="relative w-full">
                    <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-full border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search your job" required />
                    <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-full border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        <span className="sr-only">Search</span>
                    </button>
                </div>
            </div>
        </form>
        
        <div class="flex items-center space-x-5">
          <FaRegEnvelope className="text-2xl" />
          <div className="flex items-center space-x-5 rounded-full p-2 border-2 border-slate-400">
            <button onClick={() => setOpenNav(true)}><FaBars className="text-xl" /></button> 
            <img class="w-[30px] h-[30px] rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="" />
          </div>
        </div>
      </div>

      <div className={`absolute ${openNav ? "z-50 block transform transition-opacity duration-1000" : "hidden"} z-50 bg-white rounded-tl-3xl md:w-[380px] w-[300px] h-[100vh] top-0 right-0`}>
          <div className="p-10">
            <div onClick={() => setOpenNav(false)} className="mb-10" >
              <FaTimes className="text-3xl absolute right-4 top-4" />
            </div>
            <div className="mt-4" >
              <ul className="font-medium flex flex-col justify-center rounded-lg ">
                { 
                  navItems.map(navItem => (
                      <li className="my-2">
                        <a href="#" className="">{navItem}</a>
                      </li>
                  ))}
              </ul>
            </div>
          </div>
      </div>
    </nav>
  );
};

export default NavBar;
