import React from "react";
import "./BrandsProduct.scss";
import Products from "../Products/Products.json";
import ProductDetailsItems from "../ProductDetailsCard/ProductDetailsItems";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";

function BrandsProduct({ handleAddComp }) {
    const { id } = useParams();
    let item = Products.filter((item) => item.brand.id == id);

    let b = Products.filter((b) => b.brand.id == id);
    b = b[0];

    return (
        <div className="bestsaler">
            <Row className="bestsaler-title">
                {b == null && (
                    <Alert variant="danger">
                        <h1 className="text-center">Updating Brand</h1>
                    </Alert>
                )}
                <Row className="">
                    <Col>
                        {b != null && (
                            <h1 className="bestsaler-brandname">
                                {b.brand.name}
                            </h1>
                        )}
                    </Col>
                </Row>
            </Row>
            <Row>
                <div className="bestsaler-container">
                    {item.map((item, index) => (
                        <div className="bestsaler-container-item" key={index}>
                            <ProductDetailsItems
                                id={item.id}
                                name={item.name}
                                price={item.price}
                                status={item.status}
                                brand={item.brand.name}
                                images={item.images[0].path}
                                handleAddComp={handleAddComp}
                                desc={item.desc[0]}
                            />
                        </div>
                    ))}
                </div>
            </Row>
        </div>
    );
}

export default BrandsProduct;
