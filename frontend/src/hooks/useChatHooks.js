import { fetchAllUsers } from '@/api/usersAndMessageApi';
import { useQuery, useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

// Fetch all users
export const useFetchUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: fetchAllUsers,
  });
};
