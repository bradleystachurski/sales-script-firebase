import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem } from 'material-ui/List'

class Decisionmaker1aii extends Component {
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

        <p><strong>You:</strong> Oh ok great. I’m sure you would be interested if we could show you ways to improve the results you got from Adwords for free?</p>

        <hr/>

        <h3>Answers</h3>

        <List>
          <ListItem
            primaryText={
              <span><strong>Owner:</strong> No budget for it</span>
            }
            containerElement={<Link to="/decisionmaker/1ai-b" />}
            >
          </ListItem>
          <ListItem
            primaryText={
              <span><strong>Owner:</strong> Will advertise again (later in the year)</span>
            }
            containerElement={<Link to="/decisionmaker/1b" />}
            >
          </ListItem>
        </List>
      </div>
    )
  }
}

export default Decisionmaker1aii
