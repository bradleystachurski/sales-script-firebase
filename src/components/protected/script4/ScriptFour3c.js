import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem } from 'material-ui/List'

class ScriptFour3c extends Component {
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

        <p><strong>You:</strong> Do you have any major concerns about the audit?</p>

        <p><strong>Owner:</strong> (They will tell you why)</p>

        <p><em>- If the concern is over sharing their information, remind them that we will only request view access</em></p>
        <p><em>- If they say they are happy with their current marketing company, tell them that no matter who they work with, a good company should be happy to get an outside audit - it will only prove to you that they are top notch, or not)</em></p>
        <p><em>- You can also ask them why they wanted the email course/competitor report, and find out what interested them in that, but not in a review with custom suggestions to directly help them</em></p>
        <p><em>- If they put up a real wall, then mark as Cold and make a note of the call in CRM</em></p>

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

export default ScriptFour3c
