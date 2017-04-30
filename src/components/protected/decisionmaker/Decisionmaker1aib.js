import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem } from 'material-ui/List'

class Decisionmaker1aib extends Component {
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

        <p><strong>You:</strong> (Thank them, change Status to Cold and put reason as No Budget)</p>

        <hr/>

        <List>
          <ListItem
            primaryText="(Clicking this brings you to main menu)"
            containerElement={<Link to="/dashboard" />}
            />
        </List>
      </div>
    )
  }
}

export default Decisionmaker1aib
