import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem } from 'material-ui/List'

class ScriptFour2aivb extends Component {
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

        <p><strong>You:</strong> Wow, you know a lot compared to other businesses we work with</p>

        <hr/>

        <List>
          <ListItem
            primaryText="Continue"
            containerElement={<Link to="/script4/2aiii" />}
            >
          </ListItem>
        </List>
      </div>
    )
  }
}

export default ScriptFour2aivb
