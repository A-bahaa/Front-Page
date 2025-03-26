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
  if (!localStorage.getItem('masthead')) {
    localStorage.setItem('masthead', '');
    localStorage.setItem('masthead_font_size', '0.1');
    localStorage.setItem('name', '');
    localStorage.setItem('default_city', '');
    localStorage.setItem('issue_no', 0);
  }

  return <RouterProvider router={router} />;
}

export default App;
