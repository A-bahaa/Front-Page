import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

console.log(document.documentElement.clientHeight, 'hi');
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
