import React from 'react'
import Menu from './common/Menu'
import {menuItemsData} from "./common/Menu/Data";
import "../styles/cart.css"
const Cart = () => {
  return (
      <div className="container">
        <div className="your-order-text">
          <h1>Your Cart</h1>  

        </div>
        <Menu list={menuItemsData}/>
        <div className="your-total ms-auto">
          <h1>Total : ₹ 3200  </h1>  
        </div>
      </div>
    )
}

export default Cart