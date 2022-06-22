import React from 'react';

class Maps extends React.Component{
     Fruits = [
        {id: 1 , name: "Apple",  color: "Yellow"},
        {id: 2 , name: "Strawberry", color: "Red"},
        {id: 3 , name: "Kiwi", color: "Green"}
      ]; 
      
    render() {
        return (
            <div >
<table className="table">
              {this.Fruits.map((element) => (
             <thead key={element.id}>        
                    <tr> 
                <td>{element.id}</td>
            <td>{element.name}</td>  
            <td>{element.color}</td>   
               </tr></thead>
                
              ))}
</table>
            </div>
        );
    }
}
export default Maps;