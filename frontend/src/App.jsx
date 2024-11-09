import { Route, Routes } from 'react-router-dom';
import { AuthCallbackPage, HomePage } from './pages';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth-callback" element={<AuthCallbackPage />} />
      </Routes>
    </>
  );
}

export default App;
