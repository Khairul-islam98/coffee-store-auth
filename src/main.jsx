import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import AuthProvider from './provider/AuthProvider.jsx';
import Route from './routes/Route.jsx';
import { RouterProvider } from 'react-router-dom';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={Route} /></AuthProvider>
  </React.StrictMode>,
)
