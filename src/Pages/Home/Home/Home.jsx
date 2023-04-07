import React, { useEffect, useState } from 'react';
import JobCard from '../../../Components/JobCard';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import SideBarNavProfile from '../../../Components/SideBarNavProfile';
import CardLoading from '../../Shared/Loading/Loading';

const Home = () => {

    const [loading, setLoading] = useState(false);

    const [pageNumber, setPageNumber] = useState(1);
    const [numberOfPages, setNumberOfPages] = useState(0);
    const [jobs, setJobs] = useState([]);

    const url = `https://nexusjobs.vercel.app/jobs?page=${pageNumber}&limit=${8}`

    const pages = new Array(numberOfPages).fill(null).map((v, i) => i);
    
        // console.log(url);
        useEffect(() => {
            setLoading(true);
            fetch(url, {
                    headers: {
                    "content-type": "application/json",
                    // authorization: `bearer ${localStorage.getItem("CodersStackBox")}`,
                    },
                })
            .then(res => res.json())
            .then(({totalPages, jobs}) => {
            console.log(totalPages, jobs);
            setJobs(jobs);
            setNumberOfPages(totalPages);
            setLoading(false);
            return jobs;
            })
        }, [pageNumber]);

    // const {
    //     data: jobs,
    //     isLoading,
    //     refetch,
    //   } = useQuery({
    //     queryKey: ["jobs"],
    //     queryFn: async () => {
    //       const { data } = await axios.get(`http://localhost:5000/jobs?page=${pageNumber}&limit=${6}`);
    //       return data;
    //     },
    //   });
      
    // if (isLoading) {
    //     return <CardLoading />
    // }
    
    if (loading) {
        return <CardLoading />
    }
    console.log(jobs);

    const previousPage = () => {
        setPageNumber(Math.max(0, pageNumber - 1));
    }
    
    const nextPage = () => {
        setPageNumber(Math.min(numberOfPages - 1, pageNumber + 1));
    }
    

    return (
        <main className='max-w-[1200px] mx-auto min-h-screen pt-20'>
            <div className='flex items-stretch space-x-3'>
                <div className='md:block hidden bg-white min-w-[270px] p-5 rounded-lg h-[80vh]'>
                    <SideBarNavProfile />
                </div>
                <div className='mt-5 mb-40 w-full overflow-y-scroll  max-h-screen space-y-5'>
                    {
                        jobs?.map(job => <JobCard
                            job={job}
                        ></JobCard>)
                        
                    }
                    <div className="mt-4 flex justify-end">
                        <nav aria-label="Page navigation">
                        <ul className="inline-flex -space-x-px">
                            <li>
                            <button onClick={previousPage} className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</button>
                            </li>
                            {
                            pages.map((pageIndex) => (
                                <li>
                                <button onClick={() => setPageNumber(pageIndex)} key={pageIndex} 
                                className={`px-3 py-2 leading-tight border bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white 
                                `}>
                                    {pageIndex + 1}
                                </button>
                                </li>
                            ))
                            }
                            {/* <li>
                            <button aria-current="page" className="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</button>
                            </li> */}
                            <li>
                            <button onClick={nextPage} className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</button>
                            </li>
                        </ul>
                        </nav>
                    </div>
                </div>
                <div className='lg:block hidden bg-white min-w-[190px] h-[80vh] rounded-md'>
                  
                </div>
            </div>
        </main>
    );
};

export default Home;