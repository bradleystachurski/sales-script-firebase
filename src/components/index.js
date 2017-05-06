import React, { Component } from 'react'
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom'
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

import ScriptThreeMain from './protected/script3/ScriptThreeMain'
import ScriptThree1a from './protected/script3/ScriptThree1a'
import ScriptThree1ai from './protected/script3/ScriptThree1ai'
import ScriptThree1aii from './protected/script3/ScriptThree1aii'
import ScriptThree1b from './protected/script3/ScriptThree1b'
import ScriptThree1bi from './protected/script3/ScriptThree1bi'
import ScriptThree2a from './protected/script3/ScriptThree2a'
import ScriptThree2ai from './protected/script3/ScriptThree2ai'
import ScriptThree2aib from './protected/script3/ScriptThree2aib'
import ScriptThree2aii from './protected/script3/ScriptThree2aii'
import ScriptThree2aiib from './protected/script3/ScriptThree2aiib'
import ScriptThree2aiic from './protected/script3/ScriptThree2aiic'
import ScriptThree3a from './protected/script3/ScriptThree3a'
import ScriptThree3ab from './protected/script3/ScriptThree3ab'
import ScriptThree3b from './protected/script3/ScriptThree3b'
import ScriptThree3bb from './protected/script3/ScriptThree3bb'

import ScriptFourMain from './protected/script4/ScriptFourMain'
import ScriptFour1a from './protected/script4/ScriptFour1a'
import ScriptFour1b from './protected/script4/ScriptFour1b'
import ScriptFour2a from './protected/script4/ScriptFour2a'
import ScriptFour2ai from './protected/script4/ScriptFour2ai'
import ScriptFour2aii from './protected/script4/ScriptFour2aii'
import ScriptFour2aiib from './protected/script4/ScriptFour2aiib'
import ScriptFour2aiii from './protected/script4/ScriptFour2aiii'
import ScriptFour2aiv from './protected/script4/ScriptFour2aiv'
import ScriptFour2aivb from './protected/script4/ScriptFour2aivb'
import ScriptFour2av from './protected/script4/ScriptFour2av'
import ScriptFour2b from './protected/script4/ScriptFour2b'
import ScriptFour3a from './protected/script4/ScriptFour3a'
import ScriptFour3b from './protected/script4/ScriptFour3b'
import ScriptFour3c from './protected/script4/ScriptFour3c'

import ScriptFiveMain from './protected/script5/ScriptFiveMain'
import ScriptFive1a from './protected/script5/ScriptFive1a'
import ScriptFive1b from './protected/script5/ScriptFive1b'
import ScriptFive2a from './protected/script5/ScriptFive2a'
import ScriptFive2b from './protected/script5/ScriptFive2b'
import ScriptFive3a from './protected/script5/ScriptFive3a'
import ScriptFive3b from './protected/script5/ScriptFive3b'
import ScriptFive3bi from './protected/script5/ScriptFive3bi'
import ScriptFive3bii from './protected/script5/ScriptFive3bii'
import ScriptFive3biib from './protected/script5/ScriptFive3biib'
import ScriptFive3biic from './protected/script5/ScriptFive3biic'
import ScriptFive3biii from './protected/script5/ScriptFive3biii'
import ScriptFive3biiib from './protected/script5/ScriptFive3biiib'
import ScriptFive3biiic from './protected/script5/ScriptFive3biiic'
import ScriptFive4a from './protected/script5/ScriptFive4a'
import ScriptFive4ai from './protected/script5/ScriptFive4ai'
import ScriptFive4aib from './protected/script5/ScriptFive4aib'
import ScriptFive4aii from './protected/script5/ScriptFive4aii'
import ScriptFive4aiib from './protected/script5/ScriptFive4aiib'
import ScriptFive4aiic from './protected/script5/ScriptFive4aiic'
import ScriptFive4aiii from './protected/script5/ScriptFive4aiii'
import ScriptFive4aiiib from './protected/script5/ScriptFive4aiiib'
import ScriptFive4aiiic from './protected/script5/ScriptFive4aiiic'

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
                <Redirect exact path="/" to="/login" />
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
                <PrivateRoute exact authed={this.state.authed} path="/script3/main" component={ScriptThreeMain}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script3/1a" component={ScriptThree1a}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script3/1ai" component={ScriptThree1ai}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script3/1aii" component={ScriptThree1aii}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script3/1b" component={ScriptThree1b}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script3/1bi" component={ScriptThree1bi}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script3/2a" component={ScriptThree2a}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script3/2ai" component={ScriptThree2ai}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script3/2aib" component={ScriptThree2aib}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script3/2aii" component={ScriptThree2aii}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script3/2aiib" component={ScriptThree2aiib}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script3/2aiic" component={ScriptThree2aiic}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script3/3a" component={ScriptThree3a}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script3/3ab" component={ScriptThree3ab}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script3/3b" component={ScriptThree3b}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script3/3bb" component={ScriptThree3bb}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script4/main" component={ScriptFourMain}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script4/1a" component={ScriptFour1a}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script4/1b" component={ScriptFour1b}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script4/2a" component={ScriptFour2a}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script4/2ai" component={ScriptFour2ai}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script4/2aii" component={ScriptFour2aii}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script4/2aiib" component={ScriptFour2aiib}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script4/2aiii" component={ScriptFour2aiii}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script4/2aiv" component={ScriptFour2aiv}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script4/2aivb" component={ScriptFour2aivb}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script4/2av" component={ScriptFour2av}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script4/2b" component={ScriptFour2b}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script4/3a" component={ScriptFour3a}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script4/3b" component={ScriptFour3b}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script4/3c" component={ScriptFour3c}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script5/main" component={ScriptFiveMain}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script5/1a" component={ScriptFive1a}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script5/1b" component={ScriptFive1b}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script5/2a" component={ScriptFive2a}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script5/2b" component={ScriptFive2b}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script5/3a" component={ScriptFive3a}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script5/3b" component={ScriptFive3b}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script5/3bi" component={ScriptFive3bi}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script5/3bii" component={ScriptFive3bii}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script5/3biib" component={ScriptFive3biib}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script5/3biic" component={ScriptFive3biic}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script5/3biii" component={ScriptFive3biii}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script5/3biiib" component={ScriptFive3biiib}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script5/3biiic" component={ScriptFive3biiic}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script5/4a" component={ScriptFive4a}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script5/4ai" component={ScriptFive4ai}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script5/4aib" component={ScriptFive4aib}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script5/4aii" component={ScriptFive4aii}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script5/4aiib" component={ScriptFive4aiib}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script5/4aiic" component={ScriptFive4aiic}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script5/4aiii" component={ScriptFive4aiii}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script5/4aiiib" component={ScriptFive4aiiib}></PrivateRoute>
                <PrivateRoute exact authed={this.state.authed} path="/script5/4aiiic" component={ScriptFive4aiiic}></PrivateRoute>
                <Route render={() => <h3>No Match</h3>} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    )
  }
}
