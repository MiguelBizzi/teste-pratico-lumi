import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from './error-page'
import AppLayout from './app'
import DashboardPage from './dashboard'
import InvoicesPage from './invoices'

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <DashboardPage />,
      },
      {
        path: '/faturas',
        element: <InvoicesPage />,
      },
    ],
  },
])
