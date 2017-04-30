import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem } from 'material-ui/List'

class Gatekeeper1ai extends Component {
  render() {
    return (
      <div className="script-container">
        <h2>Getting Past the Gatekeeper</h2>
        <List>
          <ListItem
            primaryText={
              <div><span>If you do <strong>not</strong> have a scheduled call, click here</span></div>
            }
            containerElement={<Link to="/gatekeeper/1b" />}
            >
          </ListItem>
          <ListItem
            primaryText="If you have a scheduled call, click here"
            containerElement={<Link to="/gatekeeper/1c" />}
            >
          </ListItem>
        </List>
      </div>
    )
  }
}

export default Gatekeeper1ai
