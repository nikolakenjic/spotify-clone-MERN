import { useUser } from '@clerk/clerk-react';

const TestClerk = () => {
  const { isLoaded, user } = useUser();

  console.log('Clerk Test - isLoaded:', isLoaded, 'User:', user);

  return <div>Check Console for Clerk Status</div>;
};

export default TestClerk;
