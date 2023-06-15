import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useClassesGET = () => {

  const { data, isLoading, refetch, error } = useQuery({
    queryFn: async () => {
      const data = await axios(`${import.meta.env.VITE_BASE_URL}/classes`);

      return data?.data;
    },
    queryKey: ["classes"],
  });

  return { data, isLoading, refetch, error };
};

export default useClassesGET;
