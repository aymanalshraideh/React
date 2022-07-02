import React from "react";

class Msg extends React.Component {

    constructor(props) {
        super(props);
        this.state={msg:'Ayman'}
    }
    componentWillMount() {  
        console.log('Component Will MOUNT!')  
     }  
  
    render() {
        return (
            <h1> {this.state.msg}</h1>
        );
    }
    componentDidMount() {  
        console.log('Component Did MOUNT!')  
     }  
}
export default Msg;