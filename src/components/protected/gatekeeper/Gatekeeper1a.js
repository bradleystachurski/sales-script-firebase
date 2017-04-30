import React, { Component } from 'react'

class Gatekeeper1a extends Component {
  render() {
    return (
      <div className="script-container">
        <h2>Getting Past the Gatekeeper</h2>
        <p><strong>You:</strong> It's ________ (your name). Who am I speaking to?</p>
        <p><strong>Gatekeeper:</strong> ________ (receptionist name) </p>
        <p><strong>You:</strong> Great ________ (receptionist name), when will (owner) be in?</p>
        <p><strong>Gatekeeper:</strong> He'll be back on ________.</p>
        <p><strong>You:</strong> (Set up follow up call; if they tell you to follow up in a time frame longer than 1 month: What's the reason this is a good time to reconnect?)</p>
      </div>
    )
  }
}

export default Gatekeeper1a
