import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem } from 'material-ui/List'

class ScriptTwo1bi extends Component {
  render() {
    return (
      <div className="script-container">
        <h2>Qualifying Call with Decision Maker - Adwords account</h2>

        <h3>Important Objectives</h3>

        <ul>
          <li><em>Qualify prospect: find out if prospect is advertising, getting results, what’s important to them</em></li>
          <li><em>Offer/send prospect valuable content</em></li>
          <li><em>Schedule follow up</em></li>
        </ul>

        <hr/>

        <p><strong>You:</strong> I just have one important question to identify what we need to send you to improve your campaign. Is it more important to you to know your Adwords campaign is being improved every month, or to stay ahead of your competition?</p>

        <hr/>

        <h3>Answers</h3>

        <List>
          <ListItem
            primaryText={
              <span><strong>Owner:</strong> Knowing campaign is being improved every month</span>
            }
            containerElement={<Link to="/script2/2a" />}
            >
          </ListItem>
          <ListItem
            primaryText={
              <span><strong>Owner:</strong> Stay ahead of the competition</span>
            }
            containerElement={<Link to="/script2/2b" />}
            >
          </ListItem>
        </List>
      </div>
    )
  }
}

export default ScriptTwo1bi
