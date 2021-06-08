import React from 'react';

class Lifecycles extends React.Component{


    constructor(){

        super();

        console.log('constructor function')

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