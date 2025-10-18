import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Root from './Root/Root';
import Home from './Components/Home/Home';
import App from './Components/App/App';
import AppDetail from './Components/AppDetail/AppDetail';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch('data8.json')
      },
      {
        path: '/App',
        Component: App,
        loader: () => fetch('data28.json')
      },
      {
        path: '/:id',
        Component: AppDetail,
        loader: () => fetch('data28.json')
      }
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
