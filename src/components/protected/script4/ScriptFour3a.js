import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem } from 'material-ui/List'

class ScriptFour3a extends Component {
  render() {
    return (
      <div className="script-container">
        <h2>Follow up Call - Setting up Adwords audit</h2>

        <h3>Important Objectives</h3>

        <ul>
          <li><em>Get feedback on email course or competitor from prospect, remind them of value that we provided</em></li>
          <li><em>Set up appointment for a free Adwords audit to get custom suggestions on how to improve their Adwords campaign (reduce losses, take opportunities)</em></li>
        </ul>

        <hr/>

        <p><strong>You:</strong> OK great, what’s your Adwords account number?</p>

        <p><strong>Owner:</strong> (gives you the number)</p>

        <p>(If they aren’t sure, tell them it’s a 10 digit number in your Adwords account; you could also ask what the email address associated with the account is) *If they ask to email you the Adwords account number, give them the address, and remind them to send it within 24 hours to have the $300 Audit fee waived. Also, you can ask “If we haven’t seen the account number come through by the end of the day, can I give you a call?”</p>

        <p><strong>You:</strong> You are going to receive an email from Google, letting you know we are requesting access to your Adwords account; please approve it. Once we’ve completed the audit, our Director Chris will email it to you personally. Does (a date 6-8 days away) work for you to discuss the audit?</p>

        <p>(Schedule follow up for me)</p>

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

export default ScriptFour3a
