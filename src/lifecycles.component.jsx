import React from 'react';

class Lifecycles extends React.Component{


    constructor(props){

        super(props); //REFER THIS CHILD CONSTRUCTOR TO PARENT CONSTRUCTOR OF REACT

        console.log('constructor function of lifecyle comp')

    }


    componentDidMount() {
        console.log('componentDidMount!');
      }
    
      componentDidUpdate() {
        console.log('componentDidUpdate!');
      }
    
      componentWillUnmount() {
        console.log('componentWillUnmount!');
      }

      shouldComponentUpdate(nextProps,nextState){
          console.log('shouldComponentUpdate', nextProps);
          console.log(nextState)
          return nextProps.text !== this.props.text
      }
    


    render(){

        console.log('render function')

        return(
            <div className="lifecyles">
                <h3>Data from app component is here at lifecyles comp</h3>
                {this.props.text}
            </div>
        )

    }




}

export default Lifecycles;