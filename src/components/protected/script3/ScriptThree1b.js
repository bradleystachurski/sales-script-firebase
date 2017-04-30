import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem } from 'material-ui/List'

class ScriptThree1b extends Component {
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

        <p><strong>You:</strong> OK great, so we will put together a free competitor report and email it to you, so that you can see exactly what strategies your competitors are using. I have your email address as _____, is this correct?</p>
        <p><strong>Owner:</strong> Y/N (They will give correct email address)</p>
        <p><strong>You:</strong> We will work on this competitor report for you. I can call you on (business day that is 3-5 days away) to get your feedback. Is that a good day for you? (Schedule follow up; if they tell you to follow up in a time frame longer than 1 month: What’s the reason this is a good time to reconnect?)</p>

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

export default ScriptThree1b
