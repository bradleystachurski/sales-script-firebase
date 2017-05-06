import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem } from 'material-ui/List'

class ScriptFive4aiic extends Component {
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

        <p><strong>You:</strong> Great! Why don’t I set up a free consultation for you with our director Chris, and you can talk about the details. Does (a date 6-8 days away) work for you?</p>

        <p>(Schedule consultation for me)</p>

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

export default ScriptFive4aiic
