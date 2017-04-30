import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem } from 'material-ui/List'

class ScriptOne1ai extends Component {
  render() {
    return (
      <div className="script-container">
        <h2>Getting Past the Gatekeeper</h2>
        <List>
          <ListItem
            primaryText={
              <div><span>If you do <strong>not</strong> have a scheduled call, click here</span></div>
            }
            containerElement={<Link to="/script1/1b" />}
            >
          </ListItem>
          <ListItem
            primaryText="If you have a scheduled call, click here"
            containerElement={<Link to="/script1/1c" />}
            >
          </ListItem>
        </List>
      </div>
    )
  }
}

export default ScriptOne1ai
