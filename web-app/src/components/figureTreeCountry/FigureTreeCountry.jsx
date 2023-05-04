import React from 'react';
import treeCountry from '../../assets/treeCountry.jpg';
import './figureTreeCountry.css';

const FigureTreeCountry = () => {
    return (
        <div className="figureTreeCountry" id="figureTreeCountry">
            <div className="figureTreeCountry__card">
                <img src={treeCountry} alt="treeCountry" id="imgTreeCountry" />
            </div>
        </div>
    );
};

export default FigureTreeCountry;