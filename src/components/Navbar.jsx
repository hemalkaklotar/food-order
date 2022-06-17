import React,{useState} from 'react';
import "../styles/Navbar.css";
import logo from "../Images/logo1.png"
import {Link} from "react-router-dom";
import {BsSearch} from "react-icons/bs";
import {BsBag} from "react-icons/bs";
import {AiOutlineLogin} from "react-icons/ai";
const Navbar = () => {
    const [activelink,setactivelink]=useState(1);
  return (
    <nav className="container navbar navbar-expand-lg navbar-light">
                <img className="logo" src={logo} alt="" />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li onClick={()=>{setactivelink(1)}} className={activelink ===1 ? "active" : "nav-item"}>
                            <Link to="/" className="nav-link" >Home</Link>
                        </li>
                        {/* <li onClick={()=>{setactivelink(2)}} className={activelink ===2 ? "active" : "nav-item"}>
                            <Link to="/shop" className="nav-link" >Shop</Link>
                        </li> */}
                        <li onClick={()=>{setactivelink(3)}} className={activelink ===3 ? "active" : "nav-item"}>
                            <Link to="/menu" className="nav-link" >Menu</Link>
                        </li>
                        <li onClick={()=>{setactivelink(4)}} className={activelink ===4 ? "active" : "nav-item"}>
                            <Link to="/services" className="nav-link" href="#">Services</Link>
                        </li>
                    </ul>
                    <div className="navbar-action-area">
                        <div className="icon-search">
                            <BsSearch />
                        </div>
                        <Link to="/cart">
                        <div className="icon-add-to-cart">
                            <Link to="/cart">
                                <BsBag /><span>5</span>
                            </Link>
                        </div>
                        </Link>
                        <div className="btn-login">
                            <a href="">
                                    <AiOutlineLogin /> Login
                                    </a>
                        </div>
                    </div>
                </div>
            </nav>
  )
}

export default Navbar