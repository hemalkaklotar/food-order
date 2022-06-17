import React from 'react'
import "../../../styles/Menu.css"
import {menuItemsData} from "./Data"
import Menuitem from './MenuItem'
const Menu = () => {
  return (
    <div className="section mt-5 mx-auto">
      <div className="rowdata">
        {menuItemsData.map((item)=>{
          return(
            <div className="item" key={item.id}>
            <Menuitem id = {item.id} 
              name={item.name.substring(0,15)}
              info ={item.info.substring(0,65)}
              price={item.price}
              img={item.img}  />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Menu