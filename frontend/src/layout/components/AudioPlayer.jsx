import { usePlayerStore } from '@/store/PlayerProvider';
import { useEffect, useRef } from 'react';

const AudioPlayer = () => {
  const { currentSong, isPlaying, playNext } = usePlayerStore();
  const audioRef = useRef(null);
  const prevSongRef = useRef(null);

  // handle play/pause logic
  useEffect(() => {
    if (isPlaying) audioRef.current?.play();
    else audioRef.current?.pause();
  }, [isPlaying]);

  // handle song ends
  useEffect(() => {
    const audio = audioRef.current;

    const handleEnded = () => {
      playNext();
    };

    audio?.addEventListener('ended', handleEnded);

    return () => audio?.removeEventListener('ended', handleEnded);
  }, [playNext]);

  return <audio ref={audioRef} />;
};

export default AudioPlayer;
