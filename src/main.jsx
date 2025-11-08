import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContext from './Components/UserContext.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './Components/Routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <UserContext>
       <RouterProvider router={router}></RouterProvider>
   </UserContext>
  </StrictMode>,
)
