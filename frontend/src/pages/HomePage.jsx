import { useTrendingSongs } from '@/hooks/useMusicHooks';
import Topbar from '@/components/layout/Topbar';
import FeaturedSection from '@/components/common/FeaturedSection';
import SectionGrid from '@/components/common/SectionGrid';
import { ScrollArea } from '@/components/ui/scroll-area';
// import TestClerk from '@/TestClerk';

const HomePage = () => {
  const { data: madeForYouSongs, isLoading: isLoadingSongsForYou } =
    useTrendingSongs();
  const { data: trendingSongs, isLoading: isLoadingTrendingSongs } =
    useTrendingSongs();

  return (
    <main className="rounded-md overflow-hidden h-full bg-gradient-to-b from-zinc-800 to-zinc-900">
      <Topbar />
      <ScrollArea className="h-[calc(100vh-180px)]">
        <div className="p-4 sm:p-6">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6">
            Good afternoon
          </h1>
          <FeaturedSection />

          <div className="space-y-8">
            <SectionGrid
              title="Made For You"
              songs={madeForYouSongs}
              isLoading={isLoadingSongsForYou}
            />
            <SectionGrid
              title="Trending"
              songs={trendingSongs}
              isLoading={isLoadingTrendingSongs}
            />
          </div>
        </div>
      </ScrollArea>
    </main>
  );
};

export default HomePage;
