import React, { Component } from 'react'
import axios from 'axios'

const axiosReq = axios.create()
// const AuthContext = React.createContext()
class AuthContext extends Component {
  constructor() {
    super()
    this.state = {
      users: [],
      user: JSON.parse(localStorage.getItem('user')) || {},
      token: localStorage.getItem('token') || '',
      isLoggedIn: localStorage.getItem('user') === null ? false : true,
    }
  }
  render() {
    return (
      <AuthContext.Provider
        value={{
          login: this.login,
          logout: this.logout,
          ...this.state,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

export default AuthContext
