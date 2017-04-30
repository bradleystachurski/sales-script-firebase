import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem } from 'material-ui/List'

class ScriptThree1aii extends Component {
  render() {
    return (
      <div className="script-container">
        <h2>Qualifying Call with Decision Maker - No Adwords Account</h2>

        <h3>Important Objectives</h3>

        <ul>
          <li><em>Qualify prospect: find out if prospect is advertising, getting results, what’s important to them</em></li>
          <li><em>Offer/send prospect valuable content</em></li>
          <li><em>Schedule follow up</em></li>
        </ul>

        <hr/>

        <p><strong>You:</strong> If I could share with you some of your local competitors who are already advertising on Google and the strategies they are using to get new clients, I’m sure you’d be interested to see that, right?</p>
        <p><strong>Owner:</strong> Y/N (They will give correct email address)</p>
        <p><strong>You:</strong> Great, I'll send this email course to you. I can call you on (business day that is 6-8 days away) to get your feedback (if it helps you). Is that a good day for you?</p>
        <p><strong>You:</strong> (Schedule follow up)</p>

        <hr/>

        <h3>Answers</h3>

        <List>
          <ListItem
            primaryText={
              <span><strong>Owner:</strong> Yes (or if they have questions)</span>
            }
            containerElement={<Link to="/script3/1b" />}
            >
          </ListItem>
          <ListItem
            primaryText={
              <span><strong>Owner:</strong> No</span>
            }
            containerElement={<Link to="/script3/1bi" />}
            >
          </ListItem>
        </List>
      </div>
    )
  }
}

export default ScriptThree1aii
