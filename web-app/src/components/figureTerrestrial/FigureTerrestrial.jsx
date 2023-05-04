import React from 'react';
import terrestrial from '../../assets/terrestrial.jpg';
import './figureTerrestrial.css';

const FigureTerrestrial = () => {
    return (
        <div className="figureTerrestrial" id="figureTerrestrial">
            <div className="figureTerrestrial__card">
                <img src={terrestrial} alt="terrestrial" id="imgTerrestrial" />
            </div>
        </div>
    );
};

export default FigureTerrestrial;