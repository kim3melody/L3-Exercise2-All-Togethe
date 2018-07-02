import React, { Component } from 'react';
import PropTypes from 'prop-types'

class SendMsg extends Component {
  state = {
    msg: '',
  };

  isDisabled = () => {
    return this.state.msg === '';
  };

  isEmpty = (currMsg) => {
    return currMsg === '';
  };

  handleSubmit = (event) => {
    event.preventDefault();
    //call back function to pass data 
    this.props.onMsg(this.state.msg);
  };

  handleInputChange = event => {
    const { value } = event.target;
    this.setState(()=>({msg: value}));
  };

  render() {

    return (
       <div>
        <form className="input-group" onSubmit={this.handleSubmit}>
          <input type="text" 
                 className="form-control"
                 placeholder="Enter your message..." 
                 value={this.state.msg}
                 onChange={this.handleInputChange} />
          <div className="input-group-append">
            <button className="btn submit-button" disabled={this.isDisabled()}>
              SEND
            </button>
          </div>
        </form>
      </div>     
    );
  }
}

SendMsg.propTypes = {
  onMsg: PropTypes.func.isRequired,
};
export default SendMsg;