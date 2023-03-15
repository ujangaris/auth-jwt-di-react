import React from 'react'
import { withAuth } from '../context/AuthContext'
import Profile from './Profile'
import { Route, Navigate, Routes } from 'react-router-dom'

function ProtectedRoute(props) {
  const { isLoggedIn, user, ...rest } = props
  console.log(isLoggedIn)
  return isLoggedIn ? (
    // <Routes>
    //   <Route {...rest} element={<Profile user={user} />} />
    // </Routes>
    <Profile user={user} />
  ) : (
    <Navigate to='/' replace />
  )
}

export default withAuth(ProtectedRoute)
