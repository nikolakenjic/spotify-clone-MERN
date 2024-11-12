import fetchUrl from './axios';

export const fetchAlbums = async () => {
  const response = await fetchUrl.get('/albums');
  return response.data;
};

export const fetchAlbumById = async (id) => {
  const response = await fetchUrl.get(`/albums/${id}`);
  return response.data;
};

export const fetchSongs = async () => {
  const response = await fetchUrl.get('/songs');
  return response.data;
};

export const fetchFeaturedSongs = async () => {
  const response = await fetchUrl.get('/songs/featured');
  return response.data;
};

export const fetchMadeForYouSongs = async () => {
  const response = await fetchUrl.get('/songs/made-for-you');
  return response.data;
};

export const fetchTrendingSongs = async () => {
  const response = await fetchUrl.get('/songs/trending');
  return response.data;
};

export const fetchStats = async () => {
  const response = await fetchUrl.get('/stats');
  return response.data;
};

export const deleteSong = async (id) => {
  await fetchUrl.delete(`/admin/songs/${id}`);
};

export const deleteAlbum = async (id) => {
  await fetchUrl.delete(`/admin/albums/${id}`);
};
