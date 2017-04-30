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

        <p><strong>You:</strong> If you knew how to get clients from people who are searching for your services on Google right now, I’m sure you would be interested if we could show how to set that up for free?</p>
        <p><strong>Owner:</strong> (pause for answer, most likely “no”)</p>
        <p><strong>You:</strong> Oh, no problem. The reason for my call is because I've seen that you were advertising in (Valpak/Groupon). Have you ever tried advertising your company online through Google ads?</p>

        <hr/>

        <h3>Answers</h3>

        <List>
          <ListItem
            primaryText={
              <span><strong>Owner:</strong> Yes, or if they have questions</span>
            }
            containerElement={<Link to="/script3/1ai" />}
            >
          </ListItem>
          <ListItem
            primaryText={
              <span><strong>Owner:</strong> No</span>
            }
            containerElement={<Link to="/script3/1aii" />}
            >
          </ListItem>
        </List>
      </div>
    )
  }
}

export default ScriptThreeMain
