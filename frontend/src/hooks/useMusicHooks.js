import {
  deleteAlbum,
  deleteSong,
  fetchAlbumById,
  fetchAlbums,
  fetchFeaturedSongs,
  fetchMadeForYouSongs,
  fetchSongs,
  fetchStats,
  fetchTrendingSongs,
} from '@/api/musicApi';
import { useQuery, useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

// Fetch all songs
export const useFetchSongs = () => {
  return useQuery({
    queryKey: ['songs'],
    queryFn: fetchSongs,
  });
};

// Fetch "Made For You" songs
export const useMadeForYouSongs = () => {
  return useQuery({
    queryKey: ['madeForYouSongs'],
    queryFn: fetchMadeForYouSongs,
  });
};

// Fetch featured songs
export const useFeaturedSongs = () => {
  return useQuery({
    queryKey: ['featuredSongs'],
    queryFn: fetchFeaturedSongs,
  });
};

// Fetch trending songs
export const useTrendingSongs = () => {
  return useQuery({
    queryKey: ['trendingSongs'],
    queryFn: fetchTrendingSongs,
  });
};

// Fetch all albums
export const useFetchAlbums = () => {
  return useQuery({
    queryKey: ['albums'],
    queryFn: fetchAlbums,
  });
};

// Fetch album by ID
export const useFetchAlbumById = (id) => {
  return useQuery({
    queryKey: ['album', id],
    queryFn: () => fetchAlbumById(id),
    enabled: !!id,
  });
};

// Delete a song
export const useDeleteSong = () => {
  return useMutation(deleteSong, {
    onSuccess: () => {
      toast.success('Song deleted successfully');
    },
    onError: (error) => {
      toast.error('Error deleting song: ' + error.message);
    },
  });
};

// Delete an album
export const useDeleteAlbum = () => {
  return useMutation(deleteAlbum, {
    onSuccess: () => {
      toast.success('Album deleted successfully');
    },
    onError: (error) => {
      toast.error('Failed to delete album: ' + error.message);
    },
  });
};

// Fetch stats
export const useFetchStats = () => {
  return useQuery({
    queryKey: ['stats'],
    queryFn: fetchStats,
  });
};
