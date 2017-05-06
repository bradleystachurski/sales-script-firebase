import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem } from 'material-ui/List'

class ScriptFive4aiii extends Component {
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

        <p><strong>You:</strong> So you haven’t tried Adwords, your current campaigns are not working well, and you are wanting to get new customers through some kind of marketing. Why don’t I set up a free consultation for you with our director Chris, and you can talk about the details. Does (a date 6-8 days away) work for you?</p>

        <hr/>

        <h3>Answers</h3>

        <List>
          <ListItem
            primaryText={
              <span><strong>Owner:</strong> No</span>
            }
            containerElement={<Link to="/script5/4aiiib" />}
            >
          </ListItem>
          <ListItem
            primaryText={
              <span><strong>Owner:</strong> Yes</span>
            }
            containerElement={<Link to="/script5/4aiiic" />}
            >
          </ListItem>
        </List>
      </div>
    )
  }
}

export default ScriptFive4aiii
