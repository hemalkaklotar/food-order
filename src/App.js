//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min';


import './App.css';
import {Routes, Route, } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import {BrowserRouter} from "react-router-dom";

import Shop from './components/Shop';
import Services from './components/Services';
import Menu from './components/common/Menu';
import Whyfodie from './components/Whyfodie';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact  path="/" element={<Home/>}/>
          <Route exact  path="/about" element={<About/>}/> 
          <Route exact  path="/whyfodie" element={<Whyfodie />}/>
          <Route exact  path="/shop" element={<Shop />}/> 
          <Route exact  path="/menu" element={<Menu />}/> 
          <Route exact  path="/services" element={<Services />}/> 
          <Route exact  path="/cart" element={<Cart />}/> 

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
