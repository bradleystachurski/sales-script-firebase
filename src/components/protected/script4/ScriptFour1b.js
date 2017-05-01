import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem } from 'material-ui/List'

class ScriptFour1b extends Component {
  render() {
    return (
      <div className="script-container">
        <h2>Follow up Call - Setting up Adwords audit</h2>

        <h3>Important Objectives</h3>

        <ul>
          <li><em>Get feedback on email course or competitor from prospect, remind them of value that we provided</em></li>
          <li><em>Set up appointment for a free Adwords audit to get custom suggestions on how to improve their Adwords campaign (reduce losses, take opportunities)</em></li>
        </ul>

        <hr/>

        <p><strong>You:</strong> So how has it helped you?</p>

        <p>(You can turn this more into a conversation at this point, if that's the direction it goes)</p>

        <hr/>

        <h3>Answers</h3>

        <List>
          <ListItem
            primaryText={
              <span><strong>Owner:</strong> I haven’t had a chance to read it yet / It was helpful/fine</span>
            }
            containerElement={<Link to="/script4/2a" />}
            >
          </ListItem>
          <ListItem
            primaryText={
              <span><strong>Owner:</strong> I read you offered to send more information about ___</span>
            }
            containerElement={<Link to="/script4/2b" />}
            >
          </ListItem>
        </List>
      </div>
    )
  }
}

export default ScriptFour1b
