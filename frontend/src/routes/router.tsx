import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from './error-page'
import AppLayout from './app'

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <h1>dashboard</h1>,
      },
      {
        path: '/faturas',
        element: <h1>faturas</h1>,
      },
    ],
  },
])
