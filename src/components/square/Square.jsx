import React from "react";
import "./square.css";

export default function Square({ index }) {
    return (
        <div className="square" style={index % 2 === 0 ? {backgroundColor: '#DEB887'} : {backgroundColor: '#FFF8DC'}}></div>
    );
}