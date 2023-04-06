import React from 'react';
import { FaBookOpen, FaBookmark, FaBriefcase, FaClipboardCheck, FaClock, FaDollarSign, FaHome, FaHotel } from 'react-icons/fa';

const JobCard = ({job}) => {

    const {categoryId, categoryName, companyName, jobTitle, jobType, experience, sallery, skills, Education, aboutCompany, companyWebsite, jobDescription, publish} = job;

    return (
        <div className='md:p-6 p-4 bg-white  shadow-xl cursor-pointer'>
        <div className='mb-6 flex  items-start justify-between'>
           <div>
                <h2 className='text-xl font-bold mb-1'>{jobTitle}</h2>
                <h4 className='flex items-center gap-2 text-md font-semibold'> <FaHotel className='text-slate-600' />{companyName}</h4>
           </div>
            <button><FaBookmark className='text-3xl' /> </button>
        </div>
        <div className='flex items-center gap-5'>
            <div className='flex items-center gap-3'> <FaBriefcase /> {jobType}</div>
            <div className='flex items-center gap-3'> <FaBriefcase /> {experience}</div>
            <div className='flex items-center gap-1'> <FaDollarSign /> {sallery}</div>
        </div>

        <div className='mt-3 mb-2'>{jobType}</div>
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-2 bg-slate-100 px-2 py-1 rounded-md'> <FaClock /> {publish}</div>
            <div className='flex gap-5'>
                {/* <button className=" inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span className=" px-5 py-2.5 transition-all ease-in duration-75 text-white rounded-md group-hover:bg-opacity-0">
                        Details
                    </span>
                </button> */}
                <button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Applay Now</button>
            </div>
        </div>
    </div>
    );
};

export default JobCard;