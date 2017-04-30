import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem } from 'material-ui/List'

class ScriptTwo1a extends Component {
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

        <p><strong>You:</strong> Are you no longer advertising at all, or do you have another channel that you are trying?</p>

        <hr/>

        <h3>Answers</h3>

        <List>
          <ListItem
            primaryText="No longer advertising at all"
            containerElement={<Link to="/script2/1ai" />}
            >
          </ListItem>
          <ListItem
            primaryText="Using a different channel"
            containerElement={<Link to="/script2/1aii" />}
            >
          </ListItem>
        </List>
      </div>
    )
  }
}

export default ScriptTwo1a
