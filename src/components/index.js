import React, { Component } from 'react'
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Dashboard from './protected/Dashboard'
import { firebaseAuth, adminEmail } from '../config/constants'

import Nav from './layout/Nav'

import ScriptOneMain from './protected/script1/ScriptOneMain'
import ScriptOne1a from './protected/script1/ScriptOne1a'
import ScriptOne1ai from './protected/script1/ScriptOne1ai'
import ScriptOne1b from './protected/script1/ScriptOne1b'
import ScriptOne1bi from './protected/script1/ScriptOne1bi'
import ScriptOne1bii from './protected/script1/ScriptOne1bii'
import ScriptOne1c from './protected/script1/ScriptOne1c'
import ScriptOne1ci from './protected/script1/ScriptOne1ci'

import ScriptTwoMain from './protected/script2/ScriptTwoMain'
import ScriptTwo1a from './protected/script2/ScriptTwo1a'
import ScriptTwo1ai from './protected/script2/ScriptTwo1ai'
import ScriptTwo1aib from './protected/script2/ScriptTwo1aib'
import ScriptTwo1aii from './protected/script2/ScriptTwo1aii'
import ScriptTwo1aiii from './protected/script2/ScriptTwo1aiii'
import ScriptTwo1aiiib from './protected/script2/ScriptTwo1aiiib'
import ScriptTwo1b from './protected/script2/ScriptTwo1b'
import ScriptTwo1bi from './protected/script2/ScriptTwo1bi'
import ScriptTwo1bii from './protected/script2/ScriptTwo1bii'
import ScriptTwo1biii from './protected/script2/ScriptTwo1biii'
import ScriptTwo1biiib from './protected/script2/ScriptTwo1biiib'
import ScriptTwo1biiic from './protected/script2/ScriptTwo1biiic'
import ScriptTwo1biv from './protected/script2/ScriptTwo1biv'
import ScriptTwo1bivb from './protected/script2/ScriptTwo1bivb'
import ScriptTwo1bivc from './protected/script2/ScriptTwo1bivc'
import ScriptTwo2a from './protected/script2/ScriptTwo2a'
import ScriptTwo2ab from './protected/script2/ScriptTwo2ab'
import ScriptTwo2ai from './protected/script2/ScriptTwo2ai'
import ScriptTwo2b from './protected/script2/ScriptTwo2b'

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
      // change authed back to false in initial state
      authed: true,
      loading:  true
    }
  }

/*
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
*/

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
                <PrivateRoute exact authed={this.state.authed} path="/script1/main" component={ScriptOneMain}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script1/1a" component={ScriptOne1a}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script1/1ai" component={ScriptOne1ai}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script1/1b" component={ScriptOne1b}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script1/1bi" component={ScriptOne1bi}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script1/1bii" component={ScriptOne1bii}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script1/1c" component={ScriptOne1c}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script1/1ci" component={ScriptOne1ci}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script2/main" component={ScriptTwoMain}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script2/1a" component={ScriptTwo1a}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script2/1ai" component={ScriptTwo1ai}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script2/1aib" component={ScriptTwo1aib}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script2/1aii" component={ScriptTwo1aii}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script2/1aiii" component={ScriptTwo1aiii}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script2/1aiiib" component={ScriptTwo1aiiib}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script2/1b" component={ScriptTwo1b}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script2/1bi" component={ScriptTwo1bi}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script2/1bii" component={ScriptTwo1bii}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script2/1biii" component={ScriptTwo1biii}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script2/1biiib" component={ScriptTwo1biiib}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script2/1biiic" component={ScriptTwo1biiic}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script2/1biv" component={ScriptTwo1biv}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script2/1bivb" component={ScriptTwo1bivb}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script2/1bivc" component={ScriptTwo1bivc}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script2/2a" component={ScriptTwo2a}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script2/2ab" component={ScriptTwo2ab}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script2/2ai" component={ScriptTwo2ai}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script2/2b" component={ScriptTwo2b}></PrivateRoute>
                <Route render={() => <h3>No Match</h3>} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    )
  }
}
