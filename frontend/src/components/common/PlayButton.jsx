import { Button } from '../ui/button';
import { Pause, Play } from 'lucide-react';

const PlayButton = ({ song }) => {
  const isPlaying = true;
  const isCurrentSong = false;

  return (
    <div>
      <Button
        size={'icon'}
        className={`absolute bottom-3 right-2 bg-green-500 hover:bg-green-400 hover:scale-105 transition-all 
				opacity-0 translate-y-2 group-hover:translate-y-0 ${
          isCurrentSong ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}
      >
        {isPlaying ? (
          <Pause className="size-5 text-black" />
        ) : (
          <Play className="size-5 text-black" />
        )}
      </Button>
    </div>
  );
};

export default PlayButton;
