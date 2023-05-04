import React from 'react';
import treeWorld from '../../assets/treeWorld.jpg';
import './figureTreeWorld.css';

const FigureTreeWorld = () => {
    return (
        <div className="figureTreeWorld" id="figureTreeWorld">
            <div className="figureTreeWorld__card">
                <img src={treeWorld} alt="treeWorld" id="imgTreeWorld" />
            </div>
        </div>
    );
};

export default FigureTreeWorld;