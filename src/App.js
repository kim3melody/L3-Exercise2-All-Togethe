import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './ChatWindow';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

const users = [{ username: 'Amy' }, { username: 'John' }];

class App extends Component {
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  state = {
    msgs: [],
  };

  onMsg = (username, msg) => {
    const newMsg = {
      username: username,
      text: msg,
    };
    this.setState(currState => ({
      msgs: currState.msgs.concat([newMsg]),
    })
    );
  };

  render() {
    const { msgs } =  this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          {users.map( user => (
            <ChatWindow key={user.username} user={user} msgs={msgs} onMsg={this.onMsg}/>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
