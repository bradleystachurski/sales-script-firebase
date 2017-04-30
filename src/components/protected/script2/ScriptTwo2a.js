import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem } from 'material-ui/List'

class ScriptTwo2a extends Component {
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

        <p><strong>You:</strong> OK, we’ve put together a free email course to show you what to do to see how your campaign is being improved every month. I have your email address as _____, is this correct?</p>

        <p><strong>Owner:</strong> Y/N (They will give correct email address)</p>

        <p><strong>You:</strong> Great, I'll send this email course to you. I can call you on (business day that is 6-8 days away) to get your feedback (if it helps you). Is that a good day for you?</p>

        <hr/>

        <h3>Answers</h3>

        <List>
          <ListItem
            primaryText={
              <span><strong>Owner:</strong> Yes</span>
            }
            containerElement={<Link to="/script2/2ab" />}
            >
          </ListItem>
          <ListItem
            primaryText={
              <span><strong>Owner:</strong> Yes, but I don’t have a marketing manager</span>
            }
            containerElement={<Link to="/script2/2ai" />}
            >
          </ListItem>
        </List>
      </div>
    )
  }
}

export default ScriptTwo2a
