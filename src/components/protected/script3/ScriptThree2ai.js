import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem } from 'material-ui/List'

class ScriptThree2ai extends Component {
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

        <p><strong>You:</strong> You clearly understand that advertising works, because you’re trying through (Groupon/Valpak). What if you knew what went wrong in your old Adwords campaign, and where you had opportunities to get more clients and better results? I’m sure you’d be interested to see that, right? We can do a free audit of your past Adwords campaign and share this knowledge with you. What do you say?</p>

        <hr/>

        <h3>Answers</h3>

        <List>
          <ListItem
            primaryText={
              <span><strong>Owner:</strong> No</span>
            }
            containerElement={<Link to="/script3/2aib" />}
            >
          </ListItem>
          <ListItem
            primaryText={
              <span><strong>Owner:</strong> Yes</span>
            }
            containerElement={<Link to="/script3/3a" />}
            >
          </ListItem>
        </List>
      </div>
    )
  }
}

export default ScriptThree2ai
