import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem } from 'material-ui/List'

class Gatekeeper1bii extends Component {
  render() {
    return (
      <div className="script-container">
        <h2>Getting Past the Gatekeeper</h2>

        <p><strong>You:</strong> You told him (your full name) from Beeline? Hmm. Tell him this is in reference to his Adwords account, that should jog his memory.</p>

        <hr/>

        <List>
          <ListItem
            primaryText="(Clicking this brings you to main menu)"
            containerElement={<Link to="/dashboard" />}
          />
        </List>
      </div>
    )
  }
}

export default Gatekeeper1bii
