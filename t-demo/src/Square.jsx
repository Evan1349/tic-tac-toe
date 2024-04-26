import React from 'react';
import './Square.css';

function Square({ value, onSquareClick }) {
    return (
        <button className={`square s${value}`} onClick={onSquareClick}>
            <span className="square-value">{value}</span>
        </button>
    );
}

export default Square;
