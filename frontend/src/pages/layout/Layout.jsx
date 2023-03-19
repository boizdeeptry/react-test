import React, { useEffect } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'

const Layout = () => {
  const location = useLocation()
  const isAuth = localStorage.getItem('token') ? true : false

  if (!isAuth && location.pathname === '/healthy') {
    return <Navigate to="/healthy" />
  } else if (!isAuth && location.pathname === '/') {
    return <Navigate to="/healthy" />
  } else if (!isAuth && location.pathname !== '/healthy') {
    return <Navigate to="/auth" />
  }

  return (
    <>
      <Nav />
      <div className="min-h-[calc(100vh-64px-128px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Layout
