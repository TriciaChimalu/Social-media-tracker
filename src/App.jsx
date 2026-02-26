import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Welcome from './ui/Welcome';
import Home from './ui/Home';
import AppLayout from './ui/AppLayout';
import DailyLogger from './ui/DailyLogger';
import DataPreview from './DataPreview';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      { path: '/welcome', element: <Welcome /> },
      {
        path: '/daily-logger',
        element: <DailyLogger />,
      },
      { path: '/data-preview', element: <DataPreview /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
