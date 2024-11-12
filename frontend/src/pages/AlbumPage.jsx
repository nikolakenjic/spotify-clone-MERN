import { useParams } from 'react-router-dom';
import { useFetchAlbumById } from '@/hooks/useMusicHooks';
import { Loader } from 'lucide-react';

const AlbumPage = () => {
  const { albumId } = useParams();

  const { data: albumData, isLoading } = useFetchAlbumById(albumId);
  console.log(albumData);

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Loader className="size-6 text-emerald-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="h-full">
      {/* Main Content */}
      <div className="relative min-h-full">
        {/* bg-gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#5038a0]/80 via-zinc-900/80 to-zinc-900 pointer-events-none aria-hidden:true" />
      </div>
    </div>
  );
};

export default AlbumPage;
