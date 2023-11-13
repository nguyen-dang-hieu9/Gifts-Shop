import React from "react";
import { Link } from "react-router-dom";
import Products from "../Products/Products.json";
import "./ProductDetails.scss";
import { useParams } from "react-router-dom";
import SliderProducts from "../SliderProducts/SliderProducts";

function ProductDetails() {
    const data = Products;
    const keypara = useParams();
    let item = data.filter((item) => item.id === parseInt(keypara.id));

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
                    <h2>
                        {item[0].name} <i class="fas fa-tags"></i>
                    </h2>
                    <h4>Design by {item[0].brand.name}</h4>
                    <h5>Description:</h5>
                    <ul>
                        {item[0].desc.map((items, index) => (
                            <li key={index}>
                                {items}
                                <br />
                                <br />
                            </li>
                        ))}
                    </ul>
                    <div className="content-bar-cart">
                        <i class="fas fa-money-check-dollar"></i>
                        <h2>Price: {item[0].price} $</h2>
                    </div>
                    <Link to={item[0].file} target="_blank" download>
                        Download Information Product &emsp;
                        <i className="fas fa-file-word"></i>
                    </Link>
                    <br />
                    <br />
                    <br />
                    <div className="detail-about-product">
                        <h2 className="aboutproduct">
                            About Product <i class="fas fa-rectangle-list"></i>
                        </h2>
                        <ul className="detailitem">
                            {item[0].detail.map((items, index) => (
                                <li key={index} >
                                    {items}
                                    <br />
                                    <br />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
