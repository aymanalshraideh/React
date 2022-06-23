import React from 'react';
import { useState } from 'react';
const Use =()=>{
    let [name,setName]=useState(0)
    // let name ='Ayman';
    const ChangName=()=>{
    //   name='Mohammad';
    //   console.log(name)
    setName(name++);
    }
    return (
        <>
        <input type="button" onClick={ChangName} value={'Change'} />
        <h1>{name}</h1>
        </>
    );

}
export default Use;
