import React from "react";
class Api extends React.Component {
  state  = {
            
    name:'',
    email:'',
    age:''
}
handleInput = (e)=>{
  this.setState({
      [e.target.name]:e.target.value
  });}

  saveData = async (e)=>{
    e.preventDefault();

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: e.target.name.value , email:e.target.email.value ,age:e.target.age.value})
    };

   const response = await fetch("http://127.0.0.1:8000/api/add" ,requestOptions );
   
   if(response.ok){
    alert('Data Added Successfully');
    window.location.href = 'http://localhost:3000/';
   }else{
    alert('There is something wrong');
    window.location.href = 'http://localhost:3000/';
   }
    
}
    render(){
        return(
          // action="http://127.0.0.1:8000/api/add"
            <div className="container">
            <form  onSubmit={this.saveData}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Email</label>
    <input type="email" name="email" className="form-control" id="exampleInputPasswordexampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Age</label>
    <input type="number" name="age" className="form-control" id="exampleInputPassword1"/>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form></div>
        );
    } 
}

export default Api;