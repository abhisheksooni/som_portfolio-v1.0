import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routers/Root.router.jsx'

import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Contect from './pages/Contect.jsx'
import Services from './pages/Services.jsx'
import ProjectsShow from './pages/ProjectsShow.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/services',
        element: <Services />,
      },
      {
        path: '/project/:Pname',
        element: <Projects />,
      },
      {
        path: 'projectshow/:name',
        element: <ProjectsShow />,
      },
      {
        path: '/contact',
        element: <Contect />,
      },

    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      {/* <App /> */}
    </RouterProvider>

  </React.StrictMode>,
)
