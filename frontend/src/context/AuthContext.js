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

  // login
  login = (credentials) => {
    return axiosReq
      .post('http://localhost:4000/api/login', credentials)
      .then((res) => {
        const { token } = res.data
        localStorage.setItem('token', token)

        this.setState({
          token,
          isLoggedIn: true,
          user: res.data.user,
        })
        return res
      })
  }
  // logout
  logout = () => {
    localStorage.removeItem('token')
    this.setState({
      token: '',
      isLoggedIn: false,
      user: {},
    })
    return console.log('Logout!')
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
