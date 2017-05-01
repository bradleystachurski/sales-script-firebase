import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem } from 'material-ui/List'

class ScriptFive3biv extends Component {
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

        <p><strong>You:</strong> You are interested whether Adwords could work for you, and don’t want to set up a test campaign yourself nor have us do it. Why don’t you have a free consultation with our Director Chris? He can answer any of your questions or concerns about a test campaign. Does (day 3-5 days away) work for you for the consultationl?</p>

        <hr/>

        <h3>Answers</h3>

        <List>
          <ListItem
            primaryText={
              <span><strong>Owner:</strong> No/not interested</span>
            }
            containerElement={<Link to="/script5/3biiib" />}
            >
          </ListItem>
          <ListItem
            primaryText={
              <span><strong>Owner:</strong> Gives you a date</span>
            }
            containerElement={<Link to="/script5/3biiic" />}
            >
          </ListItem>
        </List>
      </div>
    )
  }
}

export default ScriptFive3biv
