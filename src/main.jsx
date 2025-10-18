import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Root from './Root/Root';
import Home from './Components/Home/Home';
import App from './Components/App/App';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
      {
        index:true,
        Component:Home,
        loader: ()=> fetch('data.json')
      },
      {
        path:'/App',
        Component: App,
        loader:()=>fetch('data1.json')
      }
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
