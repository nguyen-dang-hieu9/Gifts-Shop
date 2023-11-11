import React from "react";
import dataProduct from "./Products.json";
import ProductDetailsItems from "../ProductDetailsCard/ProductDetailsItems";
import './ProductsPage.scss'

const Products = ({handleAddComp}) => {
    return (
        <div className="product">
            <h3>Product</h3>
            <div className="product-container">
                {dataProduct.map((items, index) => {
                    return (
                        <div className="product-container-item" key={index}>
                            <ProductDetailsItems
                                id={items.id}
                                name={items.name}
                                price={items.price}
                                category={items.categories.name}
                                images={items.images[0].path}
                                desc={items.desc[0]}
                                status={items.status}
                                handleAddComp={handleAddComp}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Products;
