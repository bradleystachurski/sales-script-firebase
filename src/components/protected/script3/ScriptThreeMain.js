import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem } from 'material-ui/List'

class ScriptThreeMain extends Component {
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

        <p><strong>You:</strong> This is (your name) from Beeline. Are you familiar with us?</p>
        <p><strong>Owner:</strong> (pause for answer, most likely “no”)</p>
        <p><strong>You:</strong> Oh, no problem. The reason for my call is because I've seen that you were advertising in (Valpak/Groupon). Have you ever tried advertising your company online through Google ads?</p>

        <hr/>

        <h3>Answers</h3>

        <List>
          <ListItem
            primaryText="No"
            containerElement={<Link to="/script3/1a" />}
            >
          </ListItem>
          <ListItem
            primaryText="Yes"
            containerElement={<Link to="/script3/2a" />}
            >
          </ListItem>
        </List>
      </div>
    )
  }
}

export default ScriptThreeMain
