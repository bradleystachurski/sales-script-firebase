import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem } from 'material-ui/List'

class GatekeeperMain extends Component {
  render() {
    return (
      <div className="script-container">
        <h2>Getting Past the Gatekeeper</h2>
        <div><strong>You:</strong> Hello is ________ (owner) in?</div>
        <List>
          <hr/>
          <h3>Answers:</h3>
          <ListItem
            primaryText={
              <div><strong>Gatekeeper:</strong> No I'm sorry he's not in, may I ask who is calling?</div>
            }
            containerElement={<Link to="/gatekeeper/1a" />}
            >
          </ListItem>
          <ListItem
            primaryText={
              <div><strong>Gatekeeper:</strong> May I ask what this call is in reference to?</div>
            }
            containerElement={<Link to="/gatekeeper/1ai" />}
            >
          </ListItem>
        </List>
      </div>
    )
  }
}

export default GatekeeperMain

