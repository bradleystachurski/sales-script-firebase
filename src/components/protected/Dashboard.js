import React, { Component } from 'react'
import { List, ListItem } from 'material-ui/List'
import { Link } from 'react-router-dom'

class Dashboard extends Component {
  render() {
    return (
      <div className="script-container">
        <List>
          <h2>Please select a script to follow</h2>
          <ListItem
            primaryText="Script 1: Getting Past Gatekeeper"
            containerElement={<Link to="/script1/main" />}
            >
          </ListItem>
          <ListItem
            primaryText="Script 2: Qualifying Call with Decision Maker - Adwords account"
            containerElement={<Link to="/script2/main" />}
            >
          </ListItem>
          <ListItem
            primaryText="Script 3: Qualifying Call with Decision Maker - No Adwords Account"
            containerElement={<Link to="/script3/main" />}
            >
          </ListItem>
        </List>
      </div>
    );
  }
}

export default Dashboard;
