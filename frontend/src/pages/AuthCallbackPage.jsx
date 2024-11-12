import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import { Loader } from 'lucide-react';
import fetchUrl from '@/api/axios';
import { Card, CardContent } from '@/components/ui/card';

const AuthCallbackPage = () => {
  const navigate = useNavigate();
  const { isLoaded, user } = useUser();
  const syncAttempted = useRef(false);

  // console.log('isLoaded:', isLoaded, 'User:', user);

  useEffect(() => {
    if (!isLoaded || !user || syncAttempted.current) return;

    const syncUser = async () => {
      try {
        // Prevent useEffect run twice
        syncAttempted.current = true;

        await fetchUrl.post('/auth/callback', {
          id: user.id,
          firstName: user.firstName,
          imageUrl: user.imageUrl,
        });
        console.log('User synced successfully');
      } catch (error) {
        console.error(
          'Error in auth callback:',
          error.response ? error.response.data : error.message
        );
      } finally {
        navigate('/');
      }
    };

    syncUser();
  }, [isLoaded, navigate, user]);

  return (
    <div className="h-screen w-full bg-black flex items-center justify-center">
      <Card className="w-[90%] max-w-md bg-zinc-900 border-zinc-800">
        <CardContent className="flex flex-col items-center gap-4 pt-6">
          <Loader className="size-6 text-emerald-500 animate-spin" />
          <h3 className="text-zinc-400 text-xl font-bold">Logging you in</h3>
          <p className="text-zinc-400 text-sm">Redirecting...</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthCallbackPage;
