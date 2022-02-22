import React from "react";
import ReactLogo from "../logo192.png"

export default function Navbar() {
    return(
        <div className="Navbar">
            <div className="Logo">
                <img src={ReactLogo} alt="React logo"/>
                <h1>ReactFacts</h1>
            </div>
            <div className="Content">
                <h1>React Course - Project 1</h1>
            </div>
        </div>
    )
}