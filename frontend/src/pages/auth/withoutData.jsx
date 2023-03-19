import React, { Suspense, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'

const WithOutData = () => {
  return (
    <Suspense fallback={null}>
      <Nav />
      <div className="min-h-[calc(100vh-64px-128px)]">
        <Outlet />
      </div>
      <Footer />
    </Suspense>
  )
}

export default WithOutData
