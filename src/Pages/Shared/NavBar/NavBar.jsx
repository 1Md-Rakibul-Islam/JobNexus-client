import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaBox, FaHome, FaMailBulk, FaRegEnvelope, FaTimes, FaUser } from "react-icons/fa";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import Brand from "../../../Components/Brand";
import SideBarNavProfile from "../../../Components/SideBarNavProfile";
import { jobsCategories } from "../../../API/jobsCategories";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [openNav, setOpenNav] = useState(false);

  const {jobCategories, isCategoriesLoading, refetchCategories} = jobsCategories();

  const [openPopup, setOpenPopup] = useState(false);


  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };


  console.log(jobCategories);
 
  const handelLogOut = () => {
    logOut().then().catch();
  };



  const navItems = [
    "Companies", "Service",
  ] 

  return (
    <nav className={`w-full fixed bg-white md:px-10 px-2 py-2 z-10  ${ openNav && "inset-0 bg-white/20 bg-opacity-25 backdrop-blur-sm"}`}>
      <div className="flex gap-3 justify-between items-center">
        <Brand />
        <div className="md:block hidden w-auto" >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-4 md:mt-0 md:border-0 ">
            <li>
              <Link to='/'>Jobs</Link>
            </li>
            { 
              navItems.map(navItem => (
                  <li>
                    <Link to={`${navItem}`}>{navItem}</Link>
                  </li>
              ))}
          </ul>
        </div>   
        <div className="sm:block hidden ">
            <div className="flex">
                {/* <select
                 className=" inline-flex items-center py-2 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-full hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 ">
                    <option selected>Categories</option>
                    {
                      jobCategories?.map( jobCategory => <option key={jobCategory?._id} value={jobCategory?.categoryName}></option>)
                    }
                </select> */}
                <div className="flex justify-center">
                    <button onClick={ () => setOpenPopup(i => !i)} className="flex items-center justify-between w-full pl-3 py-10 border-l-gray-50 border-l-2 border border-gray-300 pr-4 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto 
                       text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-l-full hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 ">
                        Category 
                        <svg className="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> 
                    </button>
                      {
                        openPopup && <div className="absolute top-20 z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                        <ul className="py-2 text-sm text-gray-700" >
                          {
                            jobCategories?.map( category => <li>
                              <Link to={`/jobs/category/${category?.categoryName}`} className="block px-4 py-1 hover:bg-gray-100">{category?.categoryName}</Link>
                            </li>)
                          }
                        </ul>
                      </div>
                    }
                </div>
                <div className="relative w-full">
                    <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-full border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search your job" required />
                    <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-full border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        <span className="sr-only">Search</span>
                    </button>
                </div>
            </div>
        </div>
        
        <div className="flex items-center space-x-5">
          <FaRegEnvelope className="text-2xl" />
          <div className="flex items-center space-x-5 rounded-full p-2 border-2 border-slate-400">
            <button onClick={() => setOpenNav(true)}><FaBars className="text-xl" /></button> 
            <img className="w-[30px] h-[30px] rounded-full" src={user?.photoURL} alt="" />
          </div>
        </div>
      </div>

      <div className={`absolute ${openNav ? "z-50 block transdiv transition-opacity duration-1000" : "hidden"} z-50 bg-white rounded-tl-3xl md:w-[380px] w-[300px] h-[100vh] top-0 right-0`}>
          <div className="p-10">
            <div onClick={() => setOpenNav(false)} className="mb-10" >
              <FaTimes className="text-3xl cursor-pointer absolute right-4 top-4" />
            </div>
            <div className="mt-4" >
              <SideBarNavProfile />
                <li className='flex items-center my-4 gap-4'> <FaBox className='text-xl text-slate-0' /> Dashboard</li> 
                {
                    user?.email ? <li onClick={ () => handelLogOut()} className='flex items-center my-4 gap-4'> Logout</li>
                    :
                    <>
                        <Link to={'/login'}><li className='flex items-center my-4 gap-4'> Login</li> </Link>
                        <Link to={'/signup'}><li className='flex items-center my-4 gap-4'> Register</li></Link>
                    </>
                }
            </div>
          </div>
      </div>
    </nav>
  );
};

export default NavBar;
