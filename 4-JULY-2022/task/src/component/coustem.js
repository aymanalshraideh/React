import { useState } from "react";
import { Navigate,Route } from 'react-router-dom';

const Coustem=(e,p)=>{

    const [email,setEmail] =useState('aymanshraideh96@gmail.com');
    const [password,setPassword] =useState('aymans');

  const sub=()=>{

    if (e==email && p==password){

        return (
            
 <Navigate to="/welcome" />      
           
            // window.alert('Succeeded!')
        );

    }
    else {
        return (
            window.alert('deanger!')
        );
    }
  }
 

    return (

        [email,password,sub]
    );

}

export default Coustem;