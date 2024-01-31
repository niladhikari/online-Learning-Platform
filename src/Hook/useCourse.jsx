import { useQuery } from "@tanstack/react-query";
import useAxiosOpen from "./useAxiosOpen";


const useCourse = () => {
    const axiosSecure = useAxiosOpen();
    const {data: allCourse = [],isPending: loading,refetch, } = useQuery({
      queryKey: ["courseCollection"],
      queryFn: async () => {
        const res = await axiosSecure.get(`/courseCollection`);
        return res?.data;
      },
    });
  
    return [allCourse, loading, refetch];
};

export default useCourse;