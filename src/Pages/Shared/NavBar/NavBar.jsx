import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import Brand from "../../../Components/Brand";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handelLogOut = () => {
    logOut().then().catch();
  };

  const navItems = [
    "Jobs", "Companies", "Service", "About"
  ] 

  return (
    <nav className="w-full fixed bg-white px-10">
      <div className="flex justify-between items-center">
        <Brand />
        <div className=" w-full block md:w-auto" >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            { 
              navItems.map(navItem => (
                  <li>
                    <a href="#" className="">{navItem}</a>
                  </li>
              ))}
          </ul>
        </div>   
        <form>
            <div className="flex">
                <select id="default" class="flex-shrink-0 z-10 inline-flex items-center py-2 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-full hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 " type="button">All categories <svg aria-hidden="true" className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <option selected>Categories</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                </select>
                {/* </div> */}
                <div className="relative w-full">
                    <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-full border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search Mockups, Logos, Design Templates..." required />
                    <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-full border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        <span className="sr-only">Search</span>
                    </button>
                </div>
            </div>
        </form>
        
        <div class="flex items-center space-x-4">
            <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="" />
            <div class="font-medium">
                <div>Jese Leos</div>
            </div>
        </div>


      </div>
    </nav>
  );
};

export default NavBar;
