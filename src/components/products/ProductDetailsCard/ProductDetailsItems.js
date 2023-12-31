import React from "react";
import { Link } from "react-router-dom";
import "./ProductDetailsItems.scss";

function ProductDetailsItems(props) {
    const item = props;
    return (
        <div className="productdetails">
            <div className="productdetails-avatar">
                {item.status === "New" && (
                    <div className="productdetails-avatar-flag">
                        <span className="productdetails-avatar-flag-text">
                            {item.status}
                        </span>
                    </div>
                )}
                <Link to={`/products/detail/${item.id}`}>
                <img
                    src={item.images}
                    alt="items"
                    className="productdetails-avatar-img"
                />
                </Link>
            </div>
            <div className="productdetails-content">
                <Link to={`/products/detail/${item.id}`}>
                    <h4 className="productdetails-content-h4" title={item.name}>{item.name}</h4>
                </Link>
                {/* <h5 className='productdetails-content-h5'>{item.categories}</h5> */}
                <h5 className="productdetails-content-h5">{item.brand}</h5>
                <h3 className="productdetails-content-h3">
                    Price :{item.price}$
                </h3>
                <h5 className="productdetails-content-desc">{item.desc}</h5>
            </div>
            <div className="productdetails-button">
                <Link
                    to={`./detail/${item.id}`}
                    className="productdetails-button-details"
                >
                    <button className="productdetails-button-details">
                        <p className="productdetails-button-p">Details</p>
                        <i class="fas fa-circle-info"></i>
                    </button>
                </Link>
                <button className="productdetails-button-details" onClick={()=>props.handleAddComp(item.id)}>
                    <p className="productdetails-button-p">Compare</p>
                    <i class="fas fa-scale-balanced"></i>
                </button>
            </div>
        </div>
    );
}

export default ProductDetailsItems;
