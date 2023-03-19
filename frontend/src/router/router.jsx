import { Navigate } from 'react-router-dom'
import AuthLayout from '../pages/auth/Auth'
import AuthGuard from '../pages/auth/AuthGua'
import WithOutData from '../pages/auth/withoutData'
import Challenge from '../pages/challenge'
import Question from '../pages/question'
import MyPage from '../pages/record'
import Home from '../pages/home/Home'
import Healthy from '../pages/healthy'
import Layout from '../pages/layout/Layout'
import Login from '../pages/login/Login'

const routesConfig = [
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <MyPage />,
      },
      {
        path: '/challenge',
        element: <Challenge />,
      },
      {
        path: '/record',
        element: <Home />,
      },
      {
        path: '/question',
        element: <Question />,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { path: '/auth', element: <Navigate to="login" /> },
      { path: 'login', element: <AuthGuard element={<Login />} /> },
    ],
  },
  {
    path: '/healthy',
    element: <WithOutData />,
    children: [{ path: '/healthy', element: <Healthy /> }],
  },
]

export default routesConfig
