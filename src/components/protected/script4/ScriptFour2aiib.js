import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem } from 'material-ui/List'

class ScriptFour2aiib extends Component {
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

        <p><strong>You:</strong> And is (name of that person/company) improving the campaign every month?</p>

        <hr/>

        <h3>Answers</h3>

        <List>
          <ListItem
            primaryText={
              <span><strong>Owner:</strong> Yes/No</span>
            }
            containerElement={<Link to="/script4/2aiii" />}
            >
          </ListItem>
        </List>
      </div>
    )
  }
}

export default ScriptFour2aiib
