import { Button } from '../ui/button';
import { Play } from 'lucide-react';

const PlayButton = () => {
  return (
    <div>
      <Button
        size={'icon'}
        className={`absolute bottom-3 right-2 bg-green-500 hover:bg-green-400 hover:scale-105 transition-all 
        opacity-0 translate-y-2 group-hover:translate-y-0 `}
      >
        {/* {isCurrentSong && isPlaying ? (
        <Pause className="size-5 text-black" />
        ) : (
            <Play className="size-5 text-black" />
            )} */}
        <Play className="size-5 text-black" />
        Play
      </Button>
      <h1>Play</h1>
    </div>
  );
};

export default PlayButton;
