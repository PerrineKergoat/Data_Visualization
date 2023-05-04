import React from 'react';
import map from '../../assets/map.jpg';
import './figureMap.css';

const FigureMap = () => {
    return (
        <div className="figureMap" id="figureMap">
            <div className="figureMap__card">
                <img src={map} alt="map" id="imgMap" />
            </div>
        </div>
    );
};

export default FigureMap;