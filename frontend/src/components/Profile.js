import React from 'react'
import { withAuth } from '../context/AuthContext'

function Profile({ user }) {
  return (
    <div>
      <h2>Halaman Profile : {user}</h2>
    </div>
  )
}

export default withAuth(Profile)
