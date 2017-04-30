import React, { Component } from 'react'
import { login, resetPassword } from '../helpers/auth'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loginMessage: null,
      email: '',
      password: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    login(this.state.email, this.state.password)
      .catch((error) => {
        this.setState({
          loginMessage: error.message
        })
      })
  }

  handleKeyPressTarget(target) {
    if(target.charCode==13) {
      this.handleSubmit(target)
    }
  }

  render() {
    return (
      <div className="login-form">
        <h1>Login</h1>

        <form className="form-container" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <TextField
              hintText="Email"
              floatingLabelText="Email"
              onChange={(event, newValue) =>
                this.setState({
                  email: newValue
                })
              }
              onKeyPress={this.handleKeyPressTarget.bind(this)}
              /><br/>
          </div>

          <div className="form-group">
            <TextField
              hintText="Password"
              floatingLabelText="Password"
              type="password"
              onChange={(event, newValue) =>
                this.setState({
                  password: newValue
                })
              }
              onKeyPress={this.handleKeyPressTarget.bind(this)}
              />
          </div>
          {
            this.state.loginMessage &&
            <div className="alert alert-danger" role="alert">
              <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
              <span className="sr-only">Error:</span>
              &nbsp;{this.state.loginMessage} <a href="#" onClick={this.resetPassword} className="alert-link">Forgot Password?</a>
            </div>
          }
          <RaisedButton label="Submit" style={style} onClick={(event) => this.handleSubmit(event)} />
        </form>
      </div>
    )
  }
}

const style = {
  margin: 15
}
