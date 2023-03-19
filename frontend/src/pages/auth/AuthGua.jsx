import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'

const AuthGuard = ({ element }) => {
  const isAuth = localStorage.getItem('token') ? true : false

  useEffect(() => {
    //   const accessToken = webStorage.getToken(); lấy token
    const accessToken = false
    if (accessToken) {
      console.log('Lấy thông tin')
    }
  }, [])

  if (isAuth) {
    return <Navigate to="/" />
  }

  return element
}

export default AuthGuard
