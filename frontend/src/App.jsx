import { Route, Routes } from 'react-router-dom';
import { AuthCallbackPage, ChatPage, HomePage } from './pages';
import { AuthenticateWithRedirectCallback } from '@clerk/clerk-react';
import MainLayout from './layout/MainLayout';

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/sso-callback"
          element={
            <AuthenticateWithRedirectCallback
              signUpForceRedirectUrl={'/auth-callback'}
            />
          }
        />
        <Route path="/auth-callback" element={<AuthCallbackPage />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat" element={<ChatPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
