import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Home from "./Page/Home";
import Shop from "./Page/Shop";
import About from "./Page/About";
import Contact from "./Page/Contact";
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
      </Routes>
    </BrowserRouter>
  )
}

export default App
