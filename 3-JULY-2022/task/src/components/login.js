import React, { useState } from "react";

import Coustem from "./coustem";
const Login=()=>{
   
    const [e,setE]=useState('');
    const [p,setP]=useState('');

    const [email,password,sub]=Coustem(e,p);



return (

    <div>
     
     <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" onChange={e=>setE(e.target.value)}  placeholder="name@example.com"/>
  </div>
<div class="mb-3">
<label for="exampleFormControlInput1" class="form-label">Password</label>
  <input type="password" class="form-control" onChange={e=>setP(e.target.value)} />
</div>
<button type="button" onClick={sub} class="btn btn-primary">Login</button>
    
    </div>
);

}

export default Login;