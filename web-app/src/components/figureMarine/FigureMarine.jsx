import React from 'react';
import marine from '../../assets/marine.jpg';
import './figureMarine.css';

const FigureMarine = () => {
    return (
        <div className="figureMarine" id="figureMarine">
            <div className="figureMarine__card">
                <img src={marine} alt="marine" id="imgMarine" />
            </div>
        </div>
    );
};

export default FigureMarine;