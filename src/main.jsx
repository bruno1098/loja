import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home/Home.jsx'
import Aparelhos from './routes/Aparelhos/Aparelhos.jsx'
import Erro from './routes/Erro/Erro.jsx'
import VisualizarAparelho from './routes/VisualizarAparelho/VisualizarAparelho.jsx'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Erro/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/Aparelhos",
        element: <Aparelhos/>,
      },
      {
        path: "/visualizar/aparelho/:id",
        element: <VisualizarAparelho/>
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
