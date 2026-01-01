import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Home from "./Page/Home";
import Shop from "./Page/Shop";
import About from "./Page/About";
import Contact from "./Page/Contact";
import Login from "./Page/Login";
import Register from './Page/Register';
import Cart from './Page/Cart';
import ProductDetail from "./Page/ProductDetail";
import Checkout from './Page/Checkout';
function App() {
 

  return (
    <BrowserRouter basename="/ShopManager">
      <Header/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/shop" element = {<Shop/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="/contact" element = {<Contact/>}/>
        <Route path="/product/:id" element = {<ProductDetail/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/register" element = {<Register/>}/>
        <Route path="/cart" element = {<Cart/>}/>
        <Route path="/checkout" element = {<Checkout/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
