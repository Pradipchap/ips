import { GET_USERS_KEY } from "@/constants/endpoints";
import { IUserListResponse } from "@/interfaces/queryInterfaces";
import { useQuery } from "@tanstack/react-query";

interface IPaginatedQueryProps {
  page?: number;
  limit?: number;
  search?: string;
}

export const useGetUsers = ({ page = 1, limit = 10, search = "" }: IPaginatedQueryProps = {}) => {
  const getUsers = async (): Promise<IUserListResponse> => {
    try {
      const response = await fetch(`/api/users?page=${page}&limit=${limit}&search=${search}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch users: ${response.status} ${response.statusText}`);
      }
      const data: IUserListResponse = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  };

  return useQuery<IUserListResponse, Error>({
    queryKey: [GET_USERS_KEY, { page, limit, search }],
    queryFn: getUsers,
    retry: 2,
    staleTime: 2 * 60 * 1000
  });
};
