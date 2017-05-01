import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { logout } from '../../helpers/auth'

class Nav extends Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  toggleDrawer = () => this.setState({ open: !this.state.open })

  render() {
    return (
      <div>
        <AppBar
          title="Scripts App"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.toggleDrawer}
        />

        <Drawer
          docked={false}
          width={300}
          onRequestChange={this.toggleDrawer}
          open={this.state.open}
          >
          <AppBar title="Scripts App" onLeftIconButtonTouchTap={this.toggleDrawer} />
          <MenuItem primaryText="Dashboard" containerElement={<Link to="/dashboard" />} />
          {
            this.props.authed
              ? <MenuItem primaryText="Logout" onTouchTap={() => logout() } />
              : <MenuItem primaryText="Login" containerElement={<Link to="/login" />} />
          }
        </Drawer>
      </div>
    )
  }
}

export default Nav
