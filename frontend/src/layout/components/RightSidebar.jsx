import { ScrollArea } from '@/components/ui/scroll-area';
import { useFetchUsers } from '@/hooks/useChatHooks';
import { Users } from 'lucide-react';

const RightSidebar = () => {
  const { data: users, isLoading } = useFetchUsers();
  console.log(users);

  return (
    <div className="h-full bg-zinc-900 rounded-lg flex flex-col">
      <div className="p-4 flex justify-between items-center border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <Users className="size-5 shrink-0" />
          <h2 className="font-semibold">What they&apos;re listening to</h2>
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-4 space-y-4">Users</div>
      </ScrollArea>
    </div>
  );
};

export default RightSidebar;
