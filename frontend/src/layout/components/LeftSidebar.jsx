import { Link } from 'react-router-dom';
import { buttonVariants } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useFetchAlbums } from '@/hooks/useMusicHooks';
import { cn } from '@/lib/utils';
import { SignedIn } from '@clerk/clerk-react';

import { HomeIcon, Library, MessageCircle } from 'lucide-react';
import PlaylistSkeleton from '@/components/skeletons/PllaylistSkeleton';

const LeftSidebar = () => {
  const { data: albums, isLoading } = useFetchAlbums();

  //   List of albums
  const albumsList = albums?.map((album) => (
    <Link
      to={`/albums/${album._id}`}
      key={album._id}
      className="p-2 hover:bg-zinc-800 rounded-md flex items-center gap-3 group cursor-pointer"
    >
      <img
        src={album.imageUrl}
        alt="Playlist img"
        className="size-12 rounded-md flex-shrink-0 object-cover"
      />

      <div className="flex-1 min-w-0 hidden md:block">
        <p className="font-medium truncate">{album.title}</p>
        <p className="text-sm text-zinc-400 truncate">Album • {album.artist}</p>
      </div>
    </Link>
  ));

  return (
    <div className="h-full flex flex-col gap-2">
      {/* Navigation Menu */}
      <div className="rounded-lg bg-zinc-900 p-4">
        <div className="space-y-2">
          <Link
            to={'/'}
            className={cn(
              buttonVariants({
                variant: 'ghost',
                className: 'w-full justify-start text-white hover:bg-zinc-800',
              })
            )}
          >
            <HomeIcon className="mr-2 size-5" />
            <span className="hidden md:inline">Home</span>
          </Link>

          {/* If user is logged in show message */}
          <SignedIn>
            <Link
              to={'/chat'}
              className={cn(
                buttonVariants({
                  variant: 'ghost',
                  className:
                    'w-full justify-start text-white hover:bg-zinc-800',
                })
              )}
            >
              <MessageCircle className="mr-2 size-5" />
              <span>Message</span>
            </Link>
          </SignedIn>
        </div>
      </div>

      {/* Library section */}
      <div className="flex-1 rounded-lg bg-zinc-900 p-4">
        <div className="flex item-center justify-between mb-4">
          <div className="flex items-center text-white px-2">
            <Library className="mr-2 size-5" />
            <span className="hidden md:inline">Playlist</span>
          </div>
        </div>

        <ScrollArea className="h-[calc(100vh-300px)]">
          <div className="space-y-2">
            {isLoading ? <PlaylistSkeleton /> : albumsList}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default LeftSidebar;
