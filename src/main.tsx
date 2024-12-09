import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Studio from './routes/Studio';

const router = createBrowserRouter([
  { path: '/', element: <Studio /> },
  { path: '/studio', element: <App /> },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
