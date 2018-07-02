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
    messages: [],
  };

  onMsg = (username, message) => {
    const newMsg = {
      username: username,
      text: message,
    };
    this.setState(currState => ({
      messages: currState.messages.concat([newMsg]),
    })
    );
  };

  render() {
    const { messages } =  this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          {users.map( user => (
            <ChatWindow key={user.username} user={user} messages={messages} onMsg={this.onMsg}/>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
