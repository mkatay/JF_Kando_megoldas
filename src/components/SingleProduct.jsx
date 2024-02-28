import React from "react";


export const SingleProduct = ({title,category,thumbnail,description,price}) => {
  
  return (
    <div className="card d-flex flex-column justify-content-between" style={{width: '18rem'}}>
      <img src={thumbnail} className="card-img-top" alt={title} style={{height:'16rem',objectFit:'cover'}} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {category}
        </p>
        <p>{description}</p>
        <p>Price: {price}€</p>
          </div> 
       <button className="btn btn-primary m-1">
         Add to cart
        </button> 
   
    </div>
  );
};
