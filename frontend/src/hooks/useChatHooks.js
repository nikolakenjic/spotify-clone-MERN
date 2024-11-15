import { fetchAllUsers, fetchMessages } from '@/api/usersAndMessageApi';
import { useQuery, useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

// Fetch all users
export const useFetchUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: fetchAllUsers,
  });
};

// FetchMessages
export const useFetchMessage = (id) => {
  return useQuery({
    queryKey: ['messages', id],
    queryFn: () => fetchMessages(id),
  });
};
