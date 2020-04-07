import React from 'react';
import './Accordion.css';

class Accordion extends React.Component {
  static defaultProps = {
    sections: []
  };
  state = {
    currentAccIndex: 0
  }
  renderListItem() {
    return this.props.sections.map((section, index) => (
      <li key={index}>
        {this.renderButton(section, index)}
        {this.renderContent(section)}
      </li>
    ));
  }
  handleButtonClick = (index) => {
    this.setState({ currentAccIndex: index });
  }
  renderButton(section, index) {
    return (
      <button onClick={() => this.handleButtonClick(index)}>
        {section.title}
      </button>
    );
  }
  renderContent() {
    const currentSection = this.props.sections[this.state.currentAccIndex];
    return (
      <p>{currentSection.content}</p>
    )
  }
  render() {
    return (
      <ul>
        {!!this.props.sections.length && this.renderListItem()}
      </ul>
    )
  }
}

export default Accordion;