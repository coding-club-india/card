import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import dummyFoodData from './CartData'
import './style.css'

function Cart() {
let [carddata,setCardData] = useState([])
let [cart,setCart] = useState([]);




let navigate = useNavigate([]);
useEffect(()=>{
  setCardData(dummyFoodData.map(item=>({...item,quantity:0})));
  console.log(dummyFoodData,'hhhhhhhhhhh');
},[])


const viewcard =()=>{
  navigate('/view' ,{state:{cart}})

}
// add to card
const addToCard = (id) =>{
const updatedCart = carddata.map(item=>
item.id === id ? {...item,quantity:1}:item
);
setCardData(updatedCart);
const product ={...carddata.find(item=>item.id ===id),quantity:1

}
setCart([...cart,product])
}



//  inrease quanitity
const handleAdd = (id) =>{
  const updatedCart = carddata.map(item=> item.id === id?{...item,quantity:item.quantity
  +1}:item);
  setCardData(updatedCart);

  const product ={...carddata.find(item=>item.id ===id),quantity:1

  }
  setCart([...cart,product])
}


const handleRemove = (id) =>{
  const updatedCart = carddata.map(item=> item.id === id && item.quantity>0 ? {...item,quantity:item.quantity
    -1}:item);
    setCardData(updatedCart);

    const product ={...carddata.find(item=>item.id ===id),quantity:1

    }
    setCart([...cart,product])
}

const getTotalAmount = () =>{
return carddata.reduce((total,item)=> total + item.price * item.quantity, 0);

};





  return (
    <div className='container' >

      <div className=' total'>
    <h1 className='card'> Card</h1>
    <h2 className='card'>Total Price : Rs:- {getTotalAmount()}</h2>

    </div>
    <button onClick={viewcard} className='view' > View Card</button>

    <div className="card-items" >
      {carddata.map(item => (
        <p key={item.id} className="card-item" >
         <img src={item.image} className='image'  />

          <h3 className='font'>{item.name}</h3>
          <p  className='font'>{item.description}</p>
          <p className='font'> Price: Rs.{item.price}</p>

          {/*  this is a add to card and increament, decreament*/}
          {
            item.quantity === 0 ? ( <button onClick={() =>addToCard(item.id)}  className='button3'>Add to card </button>):(<div className='quantity'>  
            <button onClick={()=> handleRemove(item.id)}  className='button1'> - </button>
            <div className='quan'> {item.quantity}</div>
            <button onClick={()=> handleAdd(item.id)} className='button2'> + </button>
          </div>)
            }
          
        
         
          
          
        </p>
      ) )}
    </div>
  

    </div>
  )
}

export default Cart