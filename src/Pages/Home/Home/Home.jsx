import React from 'react';
import { FaBookOpen, FaBookmark, FaBriefcase, FaClipboardCheck, FaClock, FaDollarSign, FaHome, FaHotel } from 'react-icons/fa';

const Home = () => {
    return (
        <main className='max-w-[1200px] mx-auto min-h-screen pt-20'>
            <div className='flex items-stretch space-x-3'>
                <div className='md:block hidden bg-white min-w-[270px] p-5 rounded-lg h-[80vh]'>
                    <div className=''>
                        <div className='flex flex-col items-center justify-center gap-2'>
                            <img className='bg-slate-200 w-[100px] h-[100px] rounded-full' src='' />
                            <h2 className='font-bold text-xl'>Rakibul Islam</h2>
                            <div className='flex flex-col items-center justify-center'>
                                <h2 className='font-semibold'>Software Engineer</h2>
                                <p>Shariatpur Polytecnic Institute</p>
                                <p className='text-slate-400'>Joiend 20-Feb-2023</p>
                            </div>
                            <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">Profile</button>
                            
                        </div>   
                        <ul className=''>
                            <li className='flex items-center my-4 gap-4'> <FaHome className='text-2xl text-slate-00' /> My Home</li>
                            <li className='flex items-center my-4 gap-4'> <FaBriefcase className='text-xl text-slate-00' /> Jobs</li>
                            <li className='flex items-center my-4 gap-4'> <FaHotel className='text-xl text-slate-00' /> Companies</li>
                            <li className='flex items-center my-4 gap-4'> <FaBookOpen className='text-xl text-slate-00' /> Blogs</li>
                        </ul>
                    </div>
                </div>
                <div className='mt-5 mb-40 w-full overflow-y-scroll max-h-screen space-y-5'>
                    <div className='md:p-6 p-4 bg-white  shadow-xl cursor-pointer'>
                        <div className='mb-6 flex  items-start justify-between'>
                           <div>
                                <h2 className='text-xl font-bold mb-1'>Software Engineer</h2>
                                <h4 className='flex items-center gap-2 text-md text-slate-600 font-semibold'> <FaHotel /> Coders StackBox T.T.D</h4>
                           </div>
                            <button><FaBookmark className='text-3xl' /> </button>
                        </div>

                        <div className='flex items-center gap-5'>
                            <div className='flex items-center gap-3'> <FaBriefcase /> Full-Time</div>
                            <div className='flex items-center gap-3'> <FaBriefcase /> 1+</div>
                            <div className='flex items-center gap-1'> <FaDollarSign /> 47000</div>
                        </div>

                        <div className='mt-3 mb-2'>Remote</div>

                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-2 bg-slate-100 px-2 py-1 rounded-md'> <FaClock /> 5 days ago</div>
                            <div className='flex gap-5'>
                                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 text-white rounded-md group-hover:bg-opacity-0">
                                        Details
                                    </span>
                                </button>
                                <button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Applay Now</button>
                            </div>
                        </div>


                        
                    </div>

                </div>
                <div className='md:block hidden bg-white min-w-[190px] h-[80vh] rounded-md'>
g
                </div>
            </div>
        </main>
    );
};

export default Home;