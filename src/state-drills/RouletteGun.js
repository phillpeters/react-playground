import React from 'react';

class RouletteGun extends React.Component {
  static defaultProps = {
    bulletInChamber: 8
  };
  constructor(props) {
    super(props);
    this.state = {
      chamber: null,
      spinningTheChamber: false,
      p: ''
    }
  }
  handleButtonClick = () => {
    this.setState({
      spinningTheChamber: true,
      p: 'spinning the chamber and pulling the trigger! ...'
    });
    setTimeout(() => {
      let randomNo = Math.ceil(Math.random() * 8);
      this.setState({
        chamber: randomNo,
        spinningTheChamber: false
      })
      if (this.state.chamber === this.props.bulletInChamber) {
        this.setState({
          p: 'BANG!!!!'
        });
      } else {
        this.setState({
          p: 'you\'re safe!!!'
        });
      }
    }, 2000);
  }
  render() {
    return (
      <div>
        <p>{this.state.p}</p>
        <button onClick={this.handleButtonClick}>Pull the trigger!</button>
      </div>
    );
  }
}

export default RouletteGun;