import React from "react";
import dataProduct from "./Products.json";
import ProductDetailsItems from "../ProductDetailsCard/ProductDetailsItems";
import './ProductsPage.scss'
import Pagination from '../../pagination/Pagination'
import { useState } from "react";

const Products = ({handleAddComp}) => {
    const PER_PAGE = 8;
    const [currentPage, setcurrentPage] = useState(1);
    const handPageClick = ({ selected: selecTedPage }) => {
        setcurrentPage(selecTedPage);
    };
    const offset = currentPage * PER_PAGE;
    const currentPageData = dataProduct.slice(offset, offset + PER_PAGE);
    const pageCount = Math.ceil(dataProduct.length / PER_PAGE);
    return (
        <div className="product">
            <h3>Product</h3>
            <div className="product-container">
                {currentPageData.map((items, index) => {
                    return (
                        <div className="product-container-item" key={index}>
                            <ProductDetailsItems
                                id={items.id}
                                name={items.name}
                                price={items.price}
                                category={items.categories.name}
                                brand={items.brand.name}
                                images={items.images[0].path}
                                desc={items.desc[0]}
                                status={items.status}
                                handleAddComp={handleAddComp}
                            />
                        </div>
                    );
                })}
            </div>
            <div className="card pagination">
            <Pagination pageCount={pageCount} handPageClick={handPageClick} />
          </div>
        </div>
    );
};

export default Products;
