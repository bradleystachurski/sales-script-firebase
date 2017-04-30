import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem } from 'material-ui/List'

class GatekeeperMain extends Component {
  state = {
    open: false
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  handleNestedListToggle = (item) => {
    this.setState({
      open: item.state.open
    })
  }

  render() {
    const boldText = (
      <span>If you do <strong>not</strong> have a scheduled call, click here</span>
    )
    return (
      <div className="script-container">
        <h2>Getting Past the Gatekeeper</h2>
        <p>You: Hello is ________ (owner) in?</p>
        <List>
          <h3>Answers:</h3>
          <ListItem
            primaryText="No I'm sorry he's not in, may I ask who is calling?"
            containerElement={<Link to="/gatekeeper/1a" />}
            >
          </ListItem>
          <ListItem
            primaryText="May I ask what this call is in reference to?"
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
                <ListItem
                  key={1}
                  primaryText={boldText}
                  containerElement={<Link to="/gatekeeper/1b" />}
                />,
                <ListItem
                  key={2}
                  primaryText="If you have a scheduled call, click here"
                  containerElement={<Link to="/gatekeeper/1c" />}
                />
              ]}
            >
          </ListItem>
        </List>
      </div>
    )
  }
}

export default GatekeeperMain

