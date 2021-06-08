import React from 'react';
import logo from './logo.svg';
import './App.css';

import Lifecycles from './lifecycles.component'


class App extends React.Component{

  constructor() {
    super();

    console.log('constructor of app component')

    //data

    this.state = { //INITIALIZE THE DATA
      showChild: true,
      text: 'initial Revanth',
      number: 123
    };
  }

  render(){
    //throwing HTML to the DOM
    console.log('render of app component')
    return(
      <div className='App'>
      <header className='App=header'>

        <img src={logo} className='App-logo' alt='logo'/>

        <button onClick={ () => 

        this.setState(state => ({
          showChild: !state.showChild
        }))}>
        TOGGLE Lifecycles COMPONENT
        </button>


        <button
            onClick={() =>
              this.setState(state => ({
                text: state.text + '_hello'
              }))
            }
          >
            Update Text
          </button>

      {this.state.showChild ?   <Lifecycles text={this.state.text} number={this.state.number} /> : null }

      </header>


      </div>
    )

  }

}


export default App;