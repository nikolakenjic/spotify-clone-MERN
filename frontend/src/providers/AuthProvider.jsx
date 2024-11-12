import fetchUrl from '@/api/axios';
import { useAuth } from '@clerk/clerk-react';
import { Loader } from 'lucide-react';
import { useEffect, useState } from 'react';

const updateApiToken = (token) => {
  if (token) {
    fetchUrl.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete fetchUrl.defaults.headers.common['Authorization'];
  }
};

const AuthProvider = ({ children }) => {
  const { getToken, userId } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      try {
        const token = getToken();

        updateApiToken(token);
      } catch (error) {
        console.log('Error in auth provider', error);
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, [getToken]);

  if (loading)
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <Loader className="size-8 text-emerald-500 animate-spin" />
      </div>
    );

  return <>{children}</>;
};

export default AuthProvider;
