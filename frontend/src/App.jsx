import { Route, Routes } from 'react-router-dom';
import { AuthCallbackPage, HomePage } from './pages';
import { AuthenticateWithRedirectCallback } from '@clerk/clerk-react';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/sso-callback"
          element={
            <AuthenticateWithRedirectCallback
              signUpForceRedirectUrl={'/auth-callback'}
            />
          }
        />
        <Route path="/auth-callback" element={<AuthCallbackPage />} />
      </Routes>
    </>
  );
}

export default App;
