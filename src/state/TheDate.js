import React from 'react';

class TheDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateTime: new Date()
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        dateTime: new Date()
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return <div>{this.state.dateTime.toLocaleString()}</div>;
  }
}

export default TheDate;