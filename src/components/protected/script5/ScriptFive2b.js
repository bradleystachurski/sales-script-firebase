import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem } from 'material-ui/List'

class ScriptFive2b extends Component {
  render() {
    return (
      <div className="script-container">
        <h2>Follow up Call - Does not have Adwords experience</h2>

        <h3>Important Objectives</h3>

        <ul>
          <li><em>Get feedback on email course or competitor from prospect, remind them of value that we provided</em></li>
          <li><em>Schedule consultation with Chris</em></li>
        </ul>

        <hr/>

        <p><strong>You:</strong> Sure, we would be happy to email that to you. Do you plan to follow the steps to set up a low cost campaign, to see what kind of results you could get from Google Adwords, or would you prefer if we set up that basic campaign for you?</p>

        <hr/>

        <h3>Answers</h3>

        <List>
          <ListItem
            primaryText={
              <span><strong>Owner:</strong> You set it up (or asks questions about it)</span>
            }
            containerElement={<Link to="/script5/3a" />}
            >
          </ListItem>
          <ListItem
            primaryText={
              <span><strong>Owner:</strong> I'll set it up</span>
            }
            containerElement={<Link to="/script5/3b" />}
            >
          </ListItem>
        </List>
      </div>
    )
  }
}

export default ScriptFive2b
