import React, { Component } from 'react'
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Dashboard from './protected/Dashboard'
import { firebaseAuth, adminEmail } from '../config/constants'

import Nav from './layout/Nav'

import GatekeeperMain from './protected/gatekeeper/GatekeeperMain'
import Gatekeeper1a from './protected/gatekeeper/Gatekeeper1a'
import Gatekeeper1ai from './protected/gatekeeper/Gatekeeper1ai'
import Gatekeeper1b from './protected/gatekeeper/Gatekeeper1b'
import Gatekeeper1bi from './protected/gatekeeper/Gatekeeper1bi'
import Gatekeeper1bii from './protected/gatekeeper/Gatekeeper1bii'
import Gatekeeper1c from './protected/gatekeeper/Gatekeeper1c'
import Gatekeeper1ci from './protected/gatekeeper/Gatekeeper1ci'

import DecisionmakerMain from './protected/decisionmaker/DecisionmakerMain'
import Decisionmaker1a from './protected/decisionmaker/Decisionmaker1a'
import Decisionmaker1ai from './protected/decisionmaker/Decisionmaker1ai'
import Decisionmaker1aib from './protected/decisionmaker/Decisionmaker1aib'
import Decisionmaker1aii from './protected/decisionmaker/Decisionmaker1aii'

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
                <PrivateRoute exact authed={this.state.authed} path="/gatekeeper/1ai" component={Gatekeeper1ai}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/gatekeeper/1b" component={Gatekeeper1b}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/gatekeeper/1bi" component={Gatekeeper1bi}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/gatekeeper/1bii" component={Gatekeeper1bii}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/gatekeeper/1c" component={Gatekeeper1c}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/gatekeeper/1ci" component={Gatekeeper1ci}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/decisionmaker/main" component={DecisionmakerMain}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/decisionmaker/1a" component={Decisionmaker1a}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/decisionmaker/1ai" component={Decisionmaker1ai}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/decisionmaker/1aib" component={Decisionmaker1aib}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/decisionmaker/1aii" component={Decisionmaker1aii}></PrivateRoute>
                <Route render={() => <h3>No Match</h3>} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    )
  }
}
