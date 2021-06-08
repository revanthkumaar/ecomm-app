import React from 'react';
import logo from './logo.svg';
import './App.css';




class App extends React.Component{

  constructor() {

    //data

    this.state = {
      showChild: true,
      text: ''
    };
  }

  render(){
    //throwing HTML to the DOM
    return(
      <div className='App'>
      <header className='App=header'>

        <img src={logo} className='App-logo' alt='logo'/>

        <button onClick={ () => 

        this.setState(state => ({
          showChild: !state.showChild
        }))}>

        </button>


      </header>


      </div>
    )

  }

}