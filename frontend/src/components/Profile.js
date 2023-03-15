// rcc
import React, { Component } from 'react'
import { withAuth } from '../context/AuthContext'

function Profile(props) {
  return (
    <div>
      <h2>Halaman Profile : {props.user}</h2>
    </div>
  )
}

export default withAuth(Profile)
