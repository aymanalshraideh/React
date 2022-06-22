import React from "react";

const Map=()=>{



    const myArray = ['Jack', 'Mary', 'John', 'Krish', 'Navin'];  
    // const myArray2=myArray.sort();
    return (  
      <div className="container">     
     
          {myArray.map(name => (  
            <li>  
              {name}  
            </li>  
          ))}  
       
      </div>  
    );  
    }
    export default Map