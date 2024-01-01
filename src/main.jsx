import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/Header.jsx'
import Map from './components/Map.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />
  },
  {
    path: 'map',
    element: <Map />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
