
import React, { useState } from 'react';
// import { useState } from 'react';

const Api=()=>{
   const {data,setdata}= useState(fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json()))
//   .then(data => data)

return (

    <h1>{data.map((data)=>(<h1>{data.id}</h1>))}</h1>
);

}
export default Api