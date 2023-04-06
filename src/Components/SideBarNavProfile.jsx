import React, { useContext } from 'react';
import { FaBookOpen, FaBriefcase, FaHome, FaHotel } from 'react-icons/fa';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const SideBarNavProfile = () => {

    const {user} = useContext(AuthContext);

    return (
        <div className=''>
            <div className='flex flex-col items-center justify-center gap-2'>
                <img className='bg-slate-200 w-[100px] h-[100px] rounded-full' src={user?.photoURL} />
                <h2 className='font-bold text-xl'>{user?.displayName}</h2>
                <div className='flex flex-col items-center justify-center text-center'>
                    <h2 className='font-semibold'>Software Engineer</h2>
                    <p>Shariatpur Polytecnic Institute</p>
                    <p className='text-slate-400'>Joiend 20-Feb-2023</p>
                </div>
                <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">Profile</button>
                
            </div>   
            <ul className=''>
                <Link to={'/'} > <li className='flex items-center my-4 gap-4 cursor-pointer'> <FaHome className='text-2xl text-slate-0' /> My Home</li> </Link>
                <Link to={'/'} > <li className='flex items-center my-4 gap-4 cursor-pointer'> <FaBriefcase className='text-xl text-slate-0' /> Jobs</li> </Link>
                <Link to={'/companies'} > <li className='flex items-center my-4 gap-4 cursor-pointer'> <FaHotel className='text-xl text-slate-0' /> Companies</li> </Link>
                <Link to={'/blogs'} > <li className='flex items-center my-4 gap-4 cursor-pointer'> <FaBookOpen className='text-xl text-slate-0' /> Blogs</li> </Link>
                {/* <Link to={'/'} > <li className='flex items-center my-4 gap-4 cursor-pointer'> <FaBookOpen className='text-xl text-slate-0' /> About US</li> </Link>    */}
            </ul>
        </div>
    );
};

export default SideBarNavProfile;