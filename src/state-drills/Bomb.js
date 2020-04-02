import React from 'react';

class Bomb extends React.Component {
  static defaultProps = {

  };
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      tick: ''
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.count > 7) {
        this.setState({
          tick: 'BOOM!!!'
        });
        clearInterval(this.interval);
      } else if (this.state.count % 2 === 0) {
        this.setState({
          tick: 'tick'
        });
      } else {
        this.setState({
          tick: 'tock'
        });
      }
      this.setState({
        count: this.state.count += 1
      })
    }, 1000);
  }
  render() {
    return (
      <div>
        <p>{this.state.tick}</p>
      </div>
    );
  }
}

export default Bomb;