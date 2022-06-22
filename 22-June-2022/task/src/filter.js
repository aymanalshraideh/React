import React from 'react';
import { useState } from "react";

const Filter=() =>  {
   let name=["Khozama","Mohammad","Lujain","Nada","Ayman"]
    
   const [searchInput, setSearchInput] = useState('');
        const searchItems = (searchValue) => {
            setSearchInput(searchValue)
            console.log(searchValue)
        }


        return (


         
<>


           
             <input type="text" placeholder='Enter Search'   onChange={(e) => searchItems(e.target.value)}/>
             


            {name.filter((name)=>name.includes(searchInput)).map(name => (<li key={Math.random()}>{name}</li>))}
            </>
        );
    
}
export default Filter;