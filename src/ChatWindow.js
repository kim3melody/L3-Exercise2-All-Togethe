import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MsgHistory from './MsgHistory';
import SendMsg from './SendMsg';

class ChatWindow extends Component {
  onMsg = msg => {
      this.props.onMsg(this.props.user.username, msg);
    };

  render() {
  const { msgs, user } = this.props;
    return (
       <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{user.username}</div>
            <MsgHistory  msgs={msgs} user={user}/>
            <SendMsg onMsg={this.onMsg}/>
        </div>   
    );
  }
}

ChatWindow.propTypes = {
  onMsg: PropTypes.func.isRequired,
};
export default ChatWindow;