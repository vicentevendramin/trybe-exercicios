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
    const { clicksBtnOne } = this.state;
    this.setState((prevState, _props) => ({
      clicksBtnOne: prevState.clicksBtnOne + 1,
    }), () => {
      console.log(`Button 1 ${this.getButtonColor(clicksBtnOne)}`)
    });
  }

  handleButtonTwo() {
    const { clicksBtnTwo } = this.state;
    this.setState((prevState, _props) => ({
      clicksBtnTwo: prevState.clicksBtnTwo + 1,
    }), () => {
      console.log(`Button 2 ${this.getButtonColor(clicksBtnTwo)}`)
    });
  }

  handleButtonThree() {
    const { clicksBtnThree } = this.state;
    this.setState((prevState, _props) => ({
      clicksBtnThree: prevState.clicksBtnThree + 1,
    }), () => {
      console.log(`Button 3 ${this.getButtonColor(clicksBtnThree)}`)
    });
  }

  getButtonColor = (num) => num % 2 === 0 ? 'green' : 'white';

  render() {
    const { clicksBtnOne, clicksBtnTwo, clicksBtnThree } = this.state;
    return (
      <>
        <button 
          type="button"
          onClick={ this.handleButtonOne }
          style={ { backgroundColor: this.getButtonColor(clicksBtnOne) } }
        >
          {`Clicks: ${ clicksBtnOne }`}
        </button>
        <button
          type="button"
          onClick={ this.handleButtonTwo }
          style={ { backgroundColor: this.getButtonColor(clicksBtnTwo) } }
        >
          {`Clicks: ${ clicksBtnTwo }`}
        </button>
        <button
          type="button"
          onClick={ this.handleButtonThree }
          style={ { backgroundColor: this.getButtonColor(clicksBtnThree) } }
        >
          {`Clicks: ${ clicksBtnThree }`}
        </button>
      </>
    );
  }
}

export default App;
