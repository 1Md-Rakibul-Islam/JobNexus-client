import React from 'react';
import { useLoaderData } from 'react-router-dom';
import JobCard from '../../Components/JobCard';

const Categories = () => {
    const jobs = useLoaderData();

    // console.log(jobs);
    return (
        <section className='max-w-[800px] mx-auto w-full overflow-y-scroll  min-h-screen'>
            <div className='mb-60 mt-20'>
                {
                    jobs?.map(job => <JobCard
                        job={job}
                    ></JobCard>)
                }
            </div>
        </section>
    );
};

export default Categories;