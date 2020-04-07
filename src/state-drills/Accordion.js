import React from 'react';
import './Accordion.css';

class Accordion extends React.Component {
  static defaultProps = {
    sections: []
  };
  state = {
    currentAccIndex: null
  }
  renderListItem() {
    return (this.props.sections != null && this.props.sections.length > 0) ?
      this.props.sections.map((section, index) => (
        <li className='Accordion__item' key={index}>
          {this.renderButton(section, index)}
          {this.state.currentAccIndex === index && this.renderContent(section)}
        </li>
      )) :
      (<li></li>);
  }
  handleButtonClick = (index) => {
    this.setState({ currentAccIndex: index });
  }
  renderButton(section, index) {
    return (
      <button type='button' onClick={() => this.handleButtonClick(index)}>
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
      <ul className='Accordion'>
        {this.renderListItem()}
      </ul>
    )
  }
}

export default Accordion;