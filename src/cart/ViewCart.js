import React from 'react'
import {useLocation} from 'react-router-dom'

function ViewCart() {

  const location = useLocation();
  const {cart} = location.state;
  console.log(cart,'jklmknjkl');

  return (
    <div>
     <h2>order list</h2>
     {
     cart.map((a,b)=>{
      return <li>{a.quantity} {a.name}</li>
     
     })}
   

    </div>
  )
}

export default ViewCart