import React, { Component } from 'react'
import axios from 'axios'

const axiosReq = axios.create()
const AuthContext = React.createContext()

// configurasi untuk axios
axiosReq.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  config.headers.Authorization = token
  return config
})
export class AuthContextProvider extends Component {
  // merubah dari user ke token untuk data localStorage
  constructor() {
    super()
    this.state = {
      users: [],
      user: localStorage.getItem('user') || '',
      token: localStorage.getItem('token') || '',
      isLoggedIn: localStorage.getItem('token') === null ? false : true,
    }
  }
  // initUser
  initUser = () => {
    return axiosReq.get('http://localhost:4000/api/profile').then((res) => {
      console.log(res)
      this.setState({
        user: res.data,
      })
      return console.log(res)
    })
  }
  // login
  login = (credentials) => {
    return axiosReq
      .post('http://localhost:4000/api/login', credentials)
      .then((res) => {
        const { token } = res.data
        // let user = credentials.email

        localStorage.setItem('token', token)
        // localStorage.setItem('user', user)

        this.setState({
          token,
          isLoggedIn: true,
          // user: res.data.user,
        })
        return console.log(res)
        // redirect halaman profile jika success login
        // window.location.href = '/profile'
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
          initUser: this.initUser,
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
