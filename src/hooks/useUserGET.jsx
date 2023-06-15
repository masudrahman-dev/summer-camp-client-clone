import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useUserGET = () => {
  const { data, isLoading, refetch, error } = useQuery({
    queryFn: async () => {
      const data = await axios(`${import.meta.env.VITE_BASE_URL}/users`);

      return data?.data;
    },
    queryKey: ["users"],
  });

  return {data, isLoading, refetch};
};

export default useUserGET;
