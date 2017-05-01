import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem } from 'material-ui/List'

class ScriptFour2a extends Component {
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

        <p><strong>You:</strong> Oh no problem. There’s one fact in there that you should know about - 72% of Adwords accounts aren’t improved on a monthly basis, or even reviewed. Were you aware of this?</p>

        <p><strong>Owner:</strong> No</p>

        <p><strong>You:</strong> When was the last time your Adwords account was reviewed?</p>

        <hr/>

        <h3>Answers</h3>

        <List>
          <ListItem
            primaryText={
              <span><strong>Owner:</strong> I think my marketing manager does it every month</span>
            }
            containerElement={<Link to="/script4/2ai" />}
            >
          </ListItem>
          <ListItem
            primaryText={
              <span><strong>Owner:</strong> (Gives you a recent date)</span>
            }
            containerElement={<Link to="/script4/2aii" />}
            >
          </ListItem>
        </List>
      </div>
    )
  }
}

export default ScriptFour2a
