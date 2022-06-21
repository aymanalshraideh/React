import React from 'react';

const Card=({image,name})=>{
   let style={width:'16rem'};
    return(

        <div className="card" style={style}>
  <img src={image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a  className="btn btn-primary">See Profile</a>
  </div>
</div>
    );



}

export default Card;