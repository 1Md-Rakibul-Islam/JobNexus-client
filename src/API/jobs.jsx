import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const jobs = (categoryName = undefined) => {

    console.log(categoryName);
    const {
        data: job,
        isLoading: isJobsLoading,
        refetch: refetchJobs,
      } = useQuery({
        queryKey: ["job"],
        queryFn: async () => {
          const { data } = await axios.get(`https://nexusjobs.vercel.app/jobs?category=${categoryName}`);
          return data;
        },
      });

    return {job, isJobsLoading, refetchJobs};
};