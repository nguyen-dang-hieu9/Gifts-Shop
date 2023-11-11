import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Products from "../Products/Products.json"; 
import "./ProductDetails.scss"
import { useParams } from 'react-router-dom'
import SliderProducts from '../SliderProducts/SliderProducts'


function ProductDetails() {
  const data = Products;
  const keypara = useParams();
  const id = keypara.id;
  let item = data.filter((item) => item.id === parseInt(keypara.id) );
  let imgPreview = item[0].images[0];
  let name = item[0].name;
  let price = item[0].price;
  let handleAdd = () =>{
    setNumberProduct(numberProduct + 1)
  }
  let handleSub = () =>{
    if(numberProduct === 0){
      setNumberProduct(0)
    }else {
      setNumberProduct(numberProduct - 1)
    }
  }
  const [numberProduct, setNumberProduct] = useState(1);
  return (
    <div className="product-detail-page">
      <div className="detail-container">
        <div className='slideshow'>
          <div className='slideshow-slider'>
            <SliderProducts imagesPreview={item[0].images}/>
          </div>
        </div>
        <div className='slideshowthumbnail'>
          {item[0].images.map((temp,ind) =>{
            return(
              <div className='slideshowthumbnail-items' style={{backgroundImage: `url("${temp.path}")`}} key={ind}>
              </div>
            )
          })}   
        </div>
        <div className='content-bar'>
          <h2>{item[0].name}</h2>
          <h4>Design by {item[0].brand.name}</h4>
          <h5>{item[0].detail[0]}</h5>
          <h5>{item[0].detail[1]}</h5>
          <h5>{item[0].detail[2]}</h5>
          <div className='content-bar-cart'>
            <h2>Price: {item[0].price} $</h2>
              <div className='content-bar-cart-numbers'>
                <button onClick={()=> handleSub()}><h4>-</h4></button>
                <h4>{numberProduct}</h4>
                <button onClick={()=> handleAdd()}><h4>+</h4></button>
              </div>
              <div className='content-bar-cart-Add'>
                <button>
                  <i className="fa-solid fa-cart-plus iconAdd"></i>
                </button>
              </div>

          </div>
          <Link to={item[0].file} target="_blank" download>Download Information Product &emsp;
            <i className="fa-solid fa-download"></i>
          </Link>

        </div>  
      </div>
         
    </div>
  )
}

export default ProductDetails;