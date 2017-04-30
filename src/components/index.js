import React, { Component } from 'react'
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Dashboard from './protected/Dashboard'
import { firebaseAuth, adminEmail } from '../config/constants'

import Nav from './layout/Nav'
import GatekeeperMain from './protected/gatekeeper/GatekeeperMain'
import Gatekeeper1a from './protected/gatekeeper/Gatekeeper1a'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

function PrivateRoute({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{
              pathname: '/login',
              state: {from: props.location}
            }}
          />
      }
      />
  )
}

function PublicRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/dashboard' />
      }
      />
  )
}

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      admin: false,
      authed: false,
      loading:  true
    }
  }

  componentDidMount () {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        const admin = user.email === adminEmail
        this.setState({
          admin: admin,
          authed: true,
          loading: false
        })
      } else {
        this.setState({
          admin: false,
          authed: false,
          loading: false
        })
      }
    })
  }

  componentWillUnmount () {
    this.removeListener()
  }

  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <div>
            <Nav authed={this.state.authed} />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <PublicRoute authed={this.state.authed} path="/login" component={Login}></PublicRoute>
                <PrivateRoute authed={this.state.authed} path="/dashboard" component={Dashboard}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/gatekeeper/main" component={GatekeeperMain}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/gatekeeper/1a" component={Gatekeeper1a}></PrivateRoute>
                <Route render={() => <h3>No Match</h3>} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    )
  }
}
