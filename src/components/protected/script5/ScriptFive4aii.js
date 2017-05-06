import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem } from 'material-ui/List'

class ScriptFive4aii extends Component {
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

        <p><strong>You:</strong> If you could discover whether Adwords could bring even more new customers to you, at very little risk to you, would you be interested?</p>

        <hr/>

        <h3>Answers</h3>

        <List>
          <ListItem
            primaryText={
              <span><strong>Owner:</strong> No</span>
            }
            containerElement={<Link to="/script5/4aiib" />}
            >
          </ListItem>
          <ListItem
            primaryText={
              <span><strong>Owner:</strong> Yes</span>
            }
            containerElement={<Link to="/script5/4aiic" />}
            >
          </ListItem>
        </List>
      </div>
    )
  }
}

export default ScriptFive4aii
