import React from 'react';
import { useState } from 'react';
const About =()=>{
    let [name,setName]=useState('Ayman')
    // let name ='Ayman';
    const ChangName=(e)=>{
    //   name='Mohammad';
    //   console.log(name)
    setName('Ali');
    }
    const ChangWith=(name)=>{
        console.log('The NAme is '+ name)
    }
    return (
        <>
         <input type="button" onClick={()=>ChangWith('Ayman')} value={'Change'} />
        <input type="button" onClick={ChangName} value={'Change'} />
        <h1>{name}</h1>
        </>
    );

}
export default About;
