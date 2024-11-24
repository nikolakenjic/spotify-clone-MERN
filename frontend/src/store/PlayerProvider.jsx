import { createContext, useContext, useState } from 'react';

const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [queue, setQueue] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);

  // Initialize the queue and set the first song if none is playing
  const initializeQueue = (songs) => {
    setQueue(songs);
    if (currentIndex === -1) {
      setCurrentIndex(0);
      setCurrentSong(songs[0]);
    }
  };

  // Toggle play/pause
  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  // Play a specific album starting from an optional index
  const playAlbum = (songs, startIndex = 0) => {
    if (songs.length === 0) return;

    const song = songs[startIndex];
    //     const { socket } = useChatStore.getState(); // Get socket from useChatStore

    //     if (socket && socket.auth) {
    //       socket.emit('update_activity', {
    //         userId: socket.auth.userId,
    //         activity: `Playing ${song.title} by ${song.artist}`,
    //       });
    //     }

    setQueue(songs);
    setCurrentSong(song);
    setCurrentIndex(startIndex);
    setIsPlaying(true);
  };

  // Play the next song in the queue
  const playNext = () => {
    const nextIndex = currentIndex + 1;

    if (nextIndex < queue.length) {
      const nextSong = queue[nextIndex];
      // updateActivity(`Playing ${nextSong.title} by ${nextSong.artist}`);

      setCurrentSong(nextSong);
      setCurrentIndex(nextIndex);
      setIsPlaying(true);
    } else {
      // updateActivity('Idle');
      setIsPlaying(false);
    }
  };

  // Play the previous song in the queue
  const playPrevious = () => {
    const prevIndex = currentIndex - 1;

    if (prevIndex >= 0) {
      const prevSong = queue[prevIndex];
      // updateActivity(`Playing ${prevSong.title} by ${prevSong.artist}`);

      setCurrentSong(prevSong);
      setCurrentIndex(prevIndex);
      setIsPlaying(true);
    } else {
      // updateActivity('Idle');
      setIsPlaying(false);
    }
  };

  return (
    <PlayerContext.Provider
      value={{
        currentSong,
        isPlaying,
        queue,
        currentIndex,
        initializeQueue,
        togglePlay,
        setCurrentSong,
        playAlbum,
        playNext,
        playPrevious,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayerStore = () => {
  return useContext(PlayerContext);
};
