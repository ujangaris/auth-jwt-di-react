// rcc
import React, { Component } from 'react'
import { withAuth } from '../context/AuthContext'

class Login extends Component {
  // membuat state yang menyimpan data object
  state = {
    email: '',
    password: '',
  }
  // buat handleChange
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }
  // buat handle submit
  handleSubmit = (e) => {
    e.preventDefault()
    // metode login
    this.props.login(this.state)
  }
  render() {
    return (
      <div>
        {/* buat sebuah form yang didaamnya terdapat input email dan password */}
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            onChange={this.handleChange}
            value={this.state.email}
            placeholder='email'
            name='email'
          />
          <input
            type='password'
            onChange={this.handleChange}
            value={this.state.password}
            placeholder='password'
            name='password'
          />
          <input type='submit' value='login' />
        </form>
      </div>
    )
  }
}

export default withAuth(Login)
