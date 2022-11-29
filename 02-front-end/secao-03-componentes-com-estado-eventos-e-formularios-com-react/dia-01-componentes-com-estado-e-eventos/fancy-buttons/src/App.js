import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.handleButtonOne = this.handleButtonOne.bind(this);
    this.handleButtonTwo = this.handleButtonTwo.bind(this);
    this.handleButtonThree = this.handleButtonThree.bind(this);

    this.state = {
      clicksBtnOne: 0,
      clicksBtnTwo: 0,
      clicksBtnThree: 0,
    };
  }

  handleButtonOne() {
    this.setState((prevState, _props) => ({
      clicksBtnOne: prevState.clicksBtnOne + 1,
    }));
  }

  handleButtonTwo() {
    this.setState((prevState, _props) => ({
      clicksBtnTwo: prevState.clicksBtnTwo + 1,
    }));
  }

  handleButtonThree() {
    this.setState((prevState, _props) => ({
      clicksBtnThree: prevState.clicksBtnThree + 1,
    }));
  }

  render() {
    const { clicksBtnOne, clicksBtnTwo, clicksBtnThree } = this.state;
    return (
      <>
        <button type="button" onClick={ this.handleButtonOne }>{`Clicks: ${ clicksBtnOne }`}</button>
        <button type="button" onClick={ this.handleButtonTwo }>{`Clicks: ${ clicksBtnTwo }`}</button>
        <button type="button" onClick={ this.handleButtonThree }>{`Clicks: ${ clicksBtnThree }`}</button>
      </>
    );
  }
}

export default App;
