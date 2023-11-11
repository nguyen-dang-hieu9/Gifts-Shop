import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header';
import FooterMain from './components/footer/FooterMain';
import Home from './components/home/Home';
import ContactUs from './components/contact/ContactUs';
import ProductData from './components/products/Products/Products.json'
import InformProduct from './components/inform/InformProduct';
import ProductsPage from './components/products/Products/ProductsPage';
import Categories from './components/categories/Categories';
import ProductDetails from './components/products/ProductDetails/ProductDetails';
import BrandsProduct from './components/products/BrandsProduct/BrandsProduct';
import AboutUs from './components/aboutUs/AboutUs';
import ProductsComparison from './components/products/ProductsComparison/ProductsComparison';
import React from 'react'

function App() {
  const [ cart, setCart] = useState([]);
  const [comparison,setComparison]=useState('');
  const [inform,setInForm]=useState([]);
  const handleDelComparison = (id)=>{
    const newcomparison = comparison.filter((temp) => temp.id !== id);
    setComparison((comparison)=>newcomparison);
  }
  const handleAddComparison=(id)=>{
    if(comparison.length<=4){
      let newComp=ProductData.filter((item)=>item.id===id)
      setComparison((comparison)=>[...comparison,newComp[0]])
    }
    else{
      return alert("You should only choose a maximum of 5 products");
    }
    setInForm((inform)=>[...inform,'Comp'])
  }
  return (
    <Router>
      <div className="App">
        <Header indexofCart={cart.length} />
        <Routes>
          <Route path="/" element={<Home handleAddComp={handleAddComparison}/>}/>
          <Route path="detail/:id" element={<ProductDetails/>}/>
          <Route path="compare" element={<ProductsComparison handleDelComp={handleDelComparison} dataComparison={comparison}/>}/>
          <Route path="products" element={<ProductsPage handleAddComp={handleAddComparison}/>}/>
          <Route path="/products/:id" element={<Categories handleAddComp={handleAddComparison}/>}/>
          <Route path="products/detail/:id" element={<ProductDetails/>}/>
          <Route path="products/:id/detail/:id" element={<ProductDetails/>}/>
          <Route path="/brands/:id" element={<BrandsProduct handleAddComp={handleAddComparison}/> } />
          <Route path="brands/:id/detail/:id" element={<ProductDetails/>}/>
          <Route path="contact" element={<ContactUs/>}/>
          <Route path="about-us" element={<AboutUs/>}/>
        </Routes>
        <FooterMain/>
        <InformProduct inform={inform} setInForm={setInForm}/>
      </div>      
    </Router>
  )
}

export default App