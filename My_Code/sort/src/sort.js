import React from "react";

const Sort=()=>{



    const myArray = ['Jack', 'Mary', 'John', 'Krish', 'Navin'];  
   myArray.sort();
    
    return (  
        <div className="container">     
     
        {/* {myArray.map(name => (  
          <li>  
            {name+'s'}  
          </li>  
        ))}   */}

{myArray.join(' , ')}

         {myArray.map(name => (  
          <li>  
            {name}  
          </li>  
        ))}  
     
    </div>    
    );  
    }


// const studentDetails = ['Ali', 'Mohammad', 'Ayman', 'Noor'];

// const names = []

// studentDetails.forEach((data) => {
//   names.push(<p className='student_name'>{data}</p>)
// })

// return (
//   <div className='container'>
//     {names}
//   </div>
// )

// const data = ["Banana", "Orange", "Apple", "Mango"];
// return (
//   <div className="main">
//     <select defaultValue={'DEFAULT'}>
//       <option value="DEFAULT" disabled>None</option>
//       <option value="ascending">Ascending</option>
//       <option value="descending">Descending</option>
//     </select>
//     <ul>
//       {data.map((el, i) => (<li key={i}>{el}</li>))}
//     </ul>
//   </div>
// );
//}

//export default Sort;

// class Sort extends React.PureComponent {

//     state={
//         numbers:[11,55,58,45,21,4,52,14]
//     }
//       sort=this.state.numbers.sort()
//     render(){
//         return (
//             <div>
//                {this.sort.map(name => ( <h1>{name}</h1>)}


//             </div>
//         );
//     }



// }
export default Sort


