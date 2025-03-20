import './App.css';
import Page from './components/Page';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Editorial from './pages/Editorial';
import usePageDimensions from './hooks/usePageDimensions';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/editorial',
    element: <Editorial />,
  },
]);
function App() {
  usePageDimensions();
  return <RouterProvider router={router} />;
}

export default App;
