import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem } from 'material-ui/List'

class ScriptTwo1biii extends Component {
  render() {
    return (
      <div className="script-container">
        <h2>Qualifying Call with Decision Maker - Adwords account</h2>

        <h3>Important Objectives</h3>

        <ul>
          <li><em>Qualify prospect: find out if prospect is advertising, getting results, what’s important to them</em></li>
          <li><em>Offer/send prospect valuable content</em></li>
          <li><em>Schedule follow up</em></li>
        </ul>

        <hr/>

        <p><strong>You:</strong> If you/your team is improving your own Adwords account, then the free email course is going to be extremely helpful to reduce wasted spend. Are you the right person to send it to?</p>

        <hr/>

        <h3>Answers</h3>

        <List>
          <ListItem
            primaryText={
              <span><strong>Owner:</strong> No</span>
            }
            containerElement={<Link to="/script2/1biiib" />}
            >
          </ListItem>
          <ListItem
            primaryText={
              <span><strong>Owner:</strong> Yes</span>
            }
            containerElement={<Link to="/script2/1biiic" />}
            >
          </ListItem>
        </List>
      </div>
    )
  }
}

export default ScriptTwo1biii
