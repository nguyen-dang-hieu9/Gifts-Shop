import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./TopBars.scss";
import Search from "./Search";
import LogoMain from "./LogoMain";
import "../../styles/VariableStyle.scss";

function TopBars(handleSeachProduct) {
    let location = useLocation().pathname;

    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <LogoMain />
            </div>
            <div className="top-bar-center">
                <Search handleSeachProduct={handleSeachProduct} />
            </div>
            <div className="top-bar-right">
                <div className="title-bar" style={{ color: "#515151" }}>
                    {/* <p>{ registerUser !== undefined ? registerUser.name : ''}</p> &ensp; */}
                    &ensp;
                    <i
                        className="fa-solid fa-user cart"
                        style={{ color: "#515151" }}
                    >
                        &nbsp;
                    </i>
                </div>
                <div className="top-bar-right-cart">
                    {/* <Link to=''> */}
                    <i
                        className="fa-solid fa-cart-plus cart"
                        style={{ color: "#515151" }}
                    >
                        &emsp;
                    </i>
                    {/* </Link> */}
                    {/* <div className="top-bar-right-cart-index" ><p style={{color: indexofCart===0? '#cecece' : null }}>+{indexofCart}</p></div> */}
                </div>
                <div className="top-bar-find">
                    <Link to="contact">
                        <i
                            className="fa-solid fa-location-dot cart"
                            style={{ color: "#515151" }}
                        >
                            &emsp;
                        </i>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default TopBars;
