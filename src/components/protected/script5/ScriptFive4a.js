import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem } from 'material-ui/List'

class ScriptFive4a extends Component {
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

        <p><strong>You:</strong> Ok, you’re not interested in Adwords right now. Now, you asked for me to send you a (course on Adwords/competitor report). Let me guess: this is because you aren’t satisfied with the results you are getting from your other marketing campaigns?</p>

        <hr/>

        <h3>Answers</h3>

        <List>
          <ListItem
            primaryText={
              <span><strong>Owner:</strong> Yes, I’m not satisfied</span>
            }
            containerElement={<Link to="/script5/4ai" />}
            >
          </ListItem>
          <ListItem
            primaryText={
              <span><strong>Owner:</strong> No, I am satisfied</span>
            }
            containerElement={<Link to="/script5/4aii" />}
            >
          </ListItem>
        </List>
      </div>
    )
  }
}

export default ScriptFive4a
