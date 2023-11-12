import React from "react";
import dataProduct from "../products/Products/Products.json";
import { useParams } from "react-router";
import ProductDetailsItems from "../products/ProductDetailsCard/ProductDetailsItems";

const Categories = ({handleAddComp}) => {
    const { id } = useParams();
    let items = dataProduct.filter((item) => item.categories.id == id);
    return (
        <div className="product">
            <h1 className="product-title">{items[0].categories.name}</h1>
            <div className="product-container">
                {items.map((items, index) => {
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

export default Categories;