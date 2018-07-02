import React from 'react';
import PropTypes from 'prop-types'

// stateless functional component
const MsgHistory = props => {
  const { msgs, user } = props;
  return (
    <ul className="message-list">
      {msgs.map((msg, index) => (
        <li
          key={index}
          className={
            msg.username === user.username ? 'message sender' : 'message recipient'
          }
        >
          <p>{`${msg.username}: ${msg.text}`}</p>
        </li>
      ))}
    </ul>
  );
};


MsgHistory.propTypes = {
  msgs: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
};

export default MsgHistory;