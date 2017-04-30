import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem } from 'material-ui/List'

class ScriptTwo1bivc extends Component {
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

        <p>Most likely they will not be interested still, you can cold and make a note in CRM. However if they are interested now, click below</p>

        <hr/>

        <List>
          <ListItem
            primaryText="Click here if they are interested"
            containerElement={<Link to="/script2/2a" />}
            >
          </ListItem>
        </List>
      </div>
    )
  }
}

export default ScriptTwo1bivc
