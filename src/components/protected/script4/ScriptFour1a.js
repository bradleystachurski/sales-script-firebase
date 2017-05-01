import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem } from 'material-ui/List'

class ScriptFour1a extends Component {
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

        <p><strong>You:</strong> I have your email address as ____. I’ll resend it. Should I check back same time tomorrow?</p>

        <p><strong>Owner:</strong> Y/N (they will confirm email & time)</p>

        <p><strong>You:</strong> (schedule follow up)</p>

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

export default ScriptFour1a
