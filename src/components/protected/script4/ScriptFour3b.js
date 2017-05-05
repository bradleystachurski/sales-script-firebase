import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem } from 'material-ui/List'

class ScriptFour3b extends Component {
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

        <p><strong>You:</strong> Let me tell you what you get from an audit. We simply take a look at your Adwords account and come back to you with a 1-4 page summary of what is working well and what needs improvement. Sometimes we review a campaign and discover there's little that can be improved, which is great news to you and helpful to see how well your investments are working. Usually we find companies who are wasting thousands of dollars. Either way, it’s a very helpful report. All we need is permission to view your Adwords account, and nothing else. If you book today we also waive the fee. What do you say?</p>

        <hr/>

        <h3>Answers</h3>

        <List>
          <ListItem
            primaryText={
              <span><strong>Owner:</strong> Yes</span>
            }
            containerElement={<Link to="/script4/3a" />}
            >
          </ListItem>
          <ListItem
            primaryText={
              <span><strong>Owner:</strong> No</span>
            }
            containerElement={<Link to="/script4/3c" />}
            >
          </ListItem>
        </List>
      </div>
    )
  }
}

export default ScriptFour3b
