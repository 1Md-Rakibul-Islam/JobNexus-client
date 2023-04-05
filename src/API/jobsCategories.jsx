import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const jobsCategories = () => {

    const {
        data: jobCategories,
        isLoading: isCategoriesLoading,
        refetch: refetchCategories,
      } = useQuery({
        queryKey: ["jobCategories"],
        queryFn: async () => {
          const { data } = await axios.get("https://nexusjobs.vercel.app/jobsCategories");
          return data;
        },
      });

    return {jobCategories, isCategoriesLoading, refetchCategories}
};