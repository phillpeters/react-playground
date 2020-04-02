import React from 'react';

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      who: ''
    };
  }
  handleButtonClick = (event) => {
    this.setState({
      who: event.target.getAttribute('name')
    });
  }
  render() {
    return (
      <div>
        <p>Hello, {this.state.who}!</p>
        <button name='world' onClick={this.handleButtonClick}>World</button>
        <button name='friend' onClick={this.handleButtonClick}>Friend</button>
        <button name='React' onClick={this.handleButtonClick}>React</button>
      </div>
    );
  }
}

export default HelloWorld;