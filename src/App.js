import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id:1,
    name: "kimchi",
    image: "https://images.unsplash.com/photo-1583224944844-5b268c057b72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
    rating: 5
  },
  {
    id:2,
    name: "kimbap",
    image: "https://images.unsplash.com/photo-1532347231146-80afc9e3df2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
    rating: 4.6
  },
  {
    id:3,
    name: "Doncasu",
    image: "https://images.unsplash.com/photo-1579619002916-88cd4c81a70c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
    rating: 4
  }
];

function Food({fav, pic, rating}){

  return <div>
           <h2>I like {fav} </h2>
           <h4>{rating}/5.0 </h4>
           <img  src ={pic} width="200" height="180" alt={fav} />
  </div>
  
   
}

//  Food.PropTypes = {};

function renderFood (dish) {
 return <Food key = {dish.id} fav = {dish.name} pic = {dish.image } rating ={dish.rating}  />;
}

function App() {
  return  (
    
    <div>
      
      {console.log(foodILike.map(renderFood))}

       
       { foodILike.map(renderFood) }


    </div>
    
   
  
  );
  
}

export default App;
