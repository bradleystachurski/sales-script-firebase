import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem } from 'material-ui/List'

class ScriptThree1ai extends Component {
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

        <p><strong>You:</strong> Perfect. We will send you the steps of how to do this in an email course over the next 6 days. It will take you less than 10 minutes per day. I have your email address as _____, is this correct?</p>
        <p><strong>Owner:</strong> Y/N (They will give correct email address)</p>
        <p><strong>You:</strong> Great, I'll send this email course to you. I can call you on (business day that is 6-8 days away) to get your feedback (if it helps you). Is that a good day for you?</p>
        <p><strong>You:</strong> (Schedule follow up)</p>

        <hr/>

        <List>
          <ListItem
            primaryText="End of Script (Clicking this brings you to main menu)"
            containerElement={<Link to="/dashboard" />}
            />
        </List>
      </div>
    )
  }
}

export default ScriptThree1ai
