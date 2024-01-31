import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";



const useInstructor = () => {
    const { user,loading } = useAuth();
    const axios = useAxios();
    const { data: isInstructor , isPending: isInstructorLoading} = useQuery({
        queryKey: [user?.email, 'isInstructor'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios.get(`/users/instructor/${user.email}`);
            console.log(res.data);
            return res.data?.houseOwner;
        }
    })
    return [isInstructor,isInstructorLoading]
};

export default useInstructor;