import React from 'react';
import PropTypes from 'prop-types'

// stateless functional component
const MsgHistory = props => {
  const { messages, user } = props;
  return (
    <ul className="message-list">
      {messages.map((message, index) => (
        <li
          key={index}
          className={
            message.username === user.username ? 'message sender' : 'message recipient'
          }
        >
          <p>{`${message.username}: ${message.text}`}</p>
        </li>
      ))}
    </ul>
  );
};


MsgHistory.propTypes = {
  messages: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
};

export default MsgHistory;