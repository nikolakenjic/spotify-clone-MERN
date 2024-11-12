import { useParams } from 'react-router-dom';
import { useFetchAlbumById } from '@/hooks/useMusicHooks';
import { Clock, Loader, Pause, Play } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';

const AlbumPage = () => {
  const { albumId } = useParams();

  const isPlaying = true;

  const { data: currentAlbum, isLoading } = useFetchAlbumById(albumId);
  console.log(currentAlbum);

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Loader className="size-6 text-emerald-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="h-full">
      <ScrollArea className="h-full rounded-md">
        {/* Main Content */}
        <div className="relative min-h-full">
          {/* bg-gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#5038a0]/80 via-zinc-900/80 to-zinc-900 pointer-events-none aria-hidden:true" />

          {/* Content */}
          <div className="relative z-10">
            <div className="flex p-6 gap-6 pb-8">
              <img
                src={currentAlbum?.imageUrl}
                alt={currentAlbum?.title}
                className="w-[240px] h-[240px] shadow-xl rounded"
              />
              <div className="flex flex-col justify-end">
                <p className="text-sm font-medium">Album</p>
                <h1 className="text-7xl font-bold my-4">
                  {currentAlbum?.title}
                </h1>
                <div className="flex items-center gap-2 text-sm text-zinc-100">
                  <span className="font-medium text-white">
                    {currentAlbum?.artist}
                  </span>
                  <span>• {currentAlbum?.songs.length} songs</span>
                  <span>• {currentAlbum?.releaseYear}</span>
                </div>
              </div>
            </div>

            {/* Play button */}
            <div className="px-6 pb-4 flex items-center gap-6">
              <Button
                // onClick={handlePlayAlbum}
                size="icon"
                className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-400 
                hover:scale-105 transition-all"
              >
                {isPlaying ? (
                  <Pause className="h-7 w-7 text-black" />
                ) : (
                  <Play className="h-7 w-7 text-black" />
                )}
              </Button>
            </div>

            {/* Table Section */}
            <div className="bg-black/20 backdrop-blur-sm">
              {/* Table Header */}
              <div className="grid grid-cols-[16px_4fr_2fr_1fr] gap-4 px-10 py-2 text-sm text-zinc-400 border-b border-white/5">
                <div>#</div>
                <div>Title</div>
                <div>Released Date</div>
                <div>
                  <Clock className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default AlbumPage;
