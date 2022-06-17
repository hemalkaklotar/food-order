import React from 'react'
import "../../../../styles/Menu.css"
import ButtonAddRemoveItem from '../../ButtonAddRemoveItem'

const Menuitem = (props) => {
  
    //const{id,name,info,price,img}=props;
  
    return (
      <>
        <div className="food-item">
            <div className="img-box">
                <img src={props.img} alt="" />    
            </div>
                <p className="food-item-name">{props.name}...</p>
                <p className="food-item-info">{props.info}...</p>
                <div className="d-flex justify-content-between align-items-center price-and-add-to-cart">
                  <p className="food-price">₹ {props.price}</p>  
                  <ButtonAddRemoveItem quantity={0}/>
                </div>
        </div>
    </>
  )
}

export default Menuitem