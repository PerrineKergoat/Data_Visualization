import React from 'react';
import distrib from '../../assets/distrib.jpg';
import './figureDistrib.css';

const FigureDistrib = () => {
    return (
        <div className="figureDistrib" id="figureDistrib">
            <div className="figureDistrib__card">
                <img src={distrib} alt="distrib" id='imgDistrib'/>
            </div>
        </div>
    );
};

export default FigureDistrib;