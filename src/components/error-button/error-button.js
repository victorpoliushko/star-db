import React, {Component} from 'react';

import './error-button';

export default class ErrorButton extends Component {

  state = {
    renderError: false,
  }

  render() {
    if(this.state.renderError) {
      this.foo.bar = 0;
    }

    return(
      <button 
        className="error-button btn btn-danger btn-lg"
        onClick={() => this.setState({renderError: true})}>Throw error
      </button>
    );
  }
}