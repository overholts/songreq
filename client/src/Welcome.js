import React, { Component } from 'react';
import './Welcome.css';
import Button from './Button';
import asPage from './Page';

class Welcome extends Component {
  render() {
    return (
      <div className="Welcome">
        <div className="row">
          <div className="col-12">
            <h3>Welcome</h3>
            <p className="welcome-text">
              Play the music people want to hear, while staying in control of the turntables.
              If you're hosting a party, just log in to Spotify to let people start suggesting songs.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 text-center top-margin">
            <Button kind="primary" content="Hosting? Log In" className="hosting-button" />
          </div>
          <div className="col-md-6 text-center top-margin">
            <Button kind="secondary" content="Join a Party" className="join-button" />
          </div>
        </div>
      </div>
    );
  }
}

export default asPage(Welcome);
