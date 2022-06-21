import React from 'react';

const Table=({img,title})=>{
    return (

<table class="table">
  <thead>
    <tr>
      {/* <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th> */}
    </tr>
  </thead>
  <tbody>
    <tr>
  <td>
    <img src={img} alt="" />
     <input type="checkbox" />
     <p>{title}</p>
  </td>
  </tr>
  
  </tbody>
</table>

    );
}
export default Table;
