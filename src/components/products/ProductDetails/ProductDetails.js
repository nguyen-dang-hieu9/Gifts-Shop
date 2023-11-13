import React, { useState } from "react";
import { Link } from "react-router-dom";
import Products from "../Products/Products.json";
import "./ProductDetails.scss";
import { useParams } from "react-router-dom";
import SliderProducts from "../SliderProducts/SliderProducts";

function ProductDetails() {
    const data = Products;
    const keypara = useParams();
    let item = data.filter((item) => item.id === parseInt(keypara.id));

    let handleAdd = () => {
        setNumberProduct(numberProduct + 1);
    };
    let handleSub = () => {
        if (numberProduct === 0) {
            setNumberProduct(0);
        } else {
            setNumberProduct(numberProduct - 1);
        }
    };
    const [numberProduct, setNumberProduct] = useState(1);
    return (
        <div className="product-detail-page">
            <div className="detail-container">
                <div className="slideshow">
                    <div className="slideshow-slider">
                        <SliderProducts imagesPreview={item[0].images} />
                    </div>
                </div>
                <div className="slideshowthumbnail">
                    {item[0].images.map((temp, ind) => {
                        return (
                            <div
                                className="slideshowthumbnail-items"
                                style={{
                                    backgroundImage: `url("${temp.path}")`,
                                }}
                                key={ind}
                            ></div>
                        );
                    })}
                </div>
                <div className="content-bar">
                    <h2>{item[0].name}</h2>
                    <h4>Design by {item[0].brand.name}</h4>
                    <h5>Description:</h5>
                    <ul>
                    {
                      item[0].desc.map((items,index)=>(
                        <li key={index}>{items}<br/><br/></li>
                      ))
                    }
                    </ul>
                    <div className="content-bar-cart">
                        <h2>Price: {item[0].price} $</h2>
                        <div className="content-bar-cart-numbers">
                            <button onClick={() => handleSub()}>
                                <h4>-</h4>
                            </button>
                            <h4>{numberProduct}</h4>
                            <button onClick={() => handleAdd()}>
                                <h4>+</h4>
                            </button>
                        </div>
                        <div className="content-bar-cart-Add">
                            <button>
                                <i className="fa-solid fa-cart-plus iconAdd"></i>
                            </button>
                        </div>
                    </div>
                    <Link to={item[0].file} target="_blank" download>
                        Download Information Product &emsp;
                        <i className="fa-solid fa-download"></i>
                    </Link>
                    <br/><br/><br/> 
                    <h3>About Product:</h3>
                    <ul>
                    {
                      item[0].detail.map((items,index)=>(
                        <li key={index}>{items}<br/><br/></li>
                      ))
                    }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
