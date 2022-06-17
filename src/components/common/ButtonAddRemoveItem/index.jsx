import React from 'react'
import './style.css'
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

const ButtonAddRemoveItem = ({quantity,handleAddItem,handleRemoveItem}) => {
  return (
    <div className="AddRemovebtn">
        <p>{quantity!=0?
        <div className="btn-add-to-cart add-remove-item">
            <span onClick={handleRemoveItem}><AiOutlineMinus/></span>
            <span>{quantity} </span>
            <span onClick={handleAddItem}><AiOutlinePlus/></span>
        </div>
        :
        <div className="btn-add-to-cart add-item">
          <span> Add to cart </span>
        </div>
        }</p>
        </div>
  )
}

export default ButtonAddRemoveItem