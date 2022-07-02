import React from 'react';

class Cycle extends React.Component {
  constructor(){
    console.log('constructor');
    super();
  }
  componentWillMount() {  
    console.log('Component Will MOUNT!')  
 }  
  render() {
  
    console.log('render')
    return (<></>);
   

  }
  componentDidMount() {  
    console.log('Component Did MOUNT!')  
 }  
}

export default Cycle;