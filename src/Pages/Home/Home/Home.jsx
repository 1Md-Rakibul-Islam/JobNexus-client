import React from 'react';
import JobCard from '../../../Components/JobCard';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import SideBarNavProfile from '../../../Components/SideBarNavProfile';
import CardLoading from '../../Shared/Loading/Loading';

const Home = () => {

    // const { data, isLoading, isError, error } = useQuery(
        
    //     'jobs', () => {
    //     return axios.get('jobs.json').then((res) => res.data);
    //   });

    const {
        data: jobs,
        isLoading,
        refetch,
      } = useQuery({
        queryKey: ["jobs"],
        queryFn: async () => {
          const { data } = await axios.get("https://nexusjobs.vercel.app/jobs");
          return data;
        },
      });
      
    if (isLoading) {
        return <CardLoading />
    }
    console.log(jobs);

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
                </div>
                <div className='lg:block hidden bg-white min-w-[190px] h-[80vh] rounded-md'>
                  
                </div>
            </div>
        </main>
    );
};

export default Home;