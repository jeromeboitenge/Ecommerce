
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import SingleProducts from './pages/home/SingleProducts.jsx'


const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {path: '/',
        element:<Home/>
      },
      {
        path:"/shop/:id",
        element:<SingleProducts/>
      }
      
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
