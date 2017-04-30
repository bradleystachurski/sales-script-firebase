import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem } from 'material-ui/List'

class ScriptTwo1bii extends Component {
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

        <p><strong>You:</strong> Are you improving your Adwords account each month yourself, or is a company doing that for you?</p>

        <hr/>

        <h3>Answers</h3>

        <List>
          <ListItem
            primaryText={
              <span><strong>Owner:</strong> Improving it myself/ourselves</span>
            }
            containerElement={<Link to="/script2/1biii" />}
            >
          </ListItem>
          <ListItem
            primaryText={
              <span><strong>Owner:</strong> We have a company doing that for us</span>
            }
            containerElement={<Link to="/script2/1biv" />}
            >
          </ListItem>
        </List>
      </div>
    )
  }
}

export default ScriptTwo1bii
