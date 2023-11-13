import React from "react";
import { Link } from "react-router-dom";
import "./TopBars.scss";
import LogoMain from "./LogoMain";
import "../../styles/VariableStyle.scss";

function TopBars() {

    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <LogoMain />
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
    );
}

export default TopBars;
