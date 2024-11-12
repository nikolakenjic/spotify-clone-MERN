import fetchUrl from './axios';

export const fetchAllUsers = async () => {
  const response = await fetchUrl.get('/users');
  return response.data;
};

export const fetchMessages = async (id) => {
  const response = await fetchUrl.get(`messages/${id}`);
  return response.data;
};
