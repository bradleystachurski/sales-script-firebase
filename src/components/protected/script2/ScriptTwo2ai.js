import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem } from 'material-ui/List'

class ScriptTwo2ai extends Component {
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

        <p><strong>You:</strong> Oh, so do you manage your own Adwords account?</p>

        <p><strong>Owner:</strong> Yes.</p>

        <p><strong>You:</strong> Great, I think this email course will really help. It gives you ideas on how you can improve your campaign yourself. Should I send it to you?</p>

        <p><strong>Owner:</strong> Yes.</p>

        <p><strong>You:</strong> I can call you on (business day that is 6-8 days away) to get your feedback (if it helps you). Is that a good day for you? (Schedule follow up; if they tell you to follow up in a time frame longer than 1 month: What’s the reason this is a good time to reconnect?)</p>

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

export default ScriptTwo2ai
