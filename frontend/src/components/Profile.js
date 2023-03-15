import React, { Component } from 'react'
import { withAuth } from '../context/AuthContext'

class Profile extends Component {
  componentDidMount() {
    this.props.initUser()
  }
  render() {
    return (
      <div>
        <h2>Halaman Profile : {this.props.user.email}</h2>
      </div>
    )
  }
}

export default withAuth(Profile)
