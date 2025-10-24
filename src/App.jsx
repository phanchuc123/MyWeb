import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Home from "./Page/Home";
import Shop from "./Page/Shop";
import About from "./Page/About";
import Contact from "./Page/Contact";
import Login from "./Page/Login";
import Register from './Page/Register';
import ProductDetail from "./Page/ProductDetail";
function App() {
 

  return (
    <BrowserRouter basename="/MyWeb">
      <Header/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/shop" element = {<Shop/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="/contact" element = {<Contact/>}/>
        <Route path="/product/:id" element = {<ProductDetail/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/register" element = {<Register/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
