import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem } from 'material-ui/List'

class ScriptTwo1aiii extends Component {
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

        <p><strong>You:</strong> Knowing why you didn’t get good results in Adwords in the past could really help you, because it will tell you what went wrong, and you will be able to use what you learn from us in your other ad platform. The audit we could do on your old Adwords campaign is 100% free; we’ll simply take a look and send you a detailed report.</p>

        <hr/>

        <h3>Answers</h3>

        <List>
          <ListItem
            primaryText={
              <span><strong>Owner:</strong> No thanks</span>
            }
            containerElement={<Link to="/script2/1aiiib" />}
            >
          </ListItem>
          <ListItem
            primaryText={
              <span><strong>Owner:</strong> Sure</span>
            }
            containerElement={<Link to="/script2/1bi" />}
            >
          </ListItem>
        </List>
      </div>
    )
  }
}

export default ScriptTwo1aiii
