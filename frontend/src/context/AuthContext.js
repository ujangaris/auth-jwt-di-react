import React, { Component } from 'react'
import axios from 'axios'

const axiosReq = axios.create()
const AuthContext = React.createContext()

export class AuthContextProvider extends Component {
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
        return console.log(res)
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

// higher order component
export const withAuth = (WrappedComponent) => {
  return class extends Component {
    render() {
      return (
        <AuthContext.Consumer>
          {(context) => <WrappedComponent {...this.props} {...context} />}
        </AuthContext.Consumer>
      )
    }
  }
}
