import React from 'react';
import vulnerabilities from '../../assets/vulnerabilities.jpg';
import './figureVulnerabilities.css';

const FigureVulnerabilities = () => {
    return (
        <div className="figureVulnerabilities" id="figureVulnerabilities">
            <div className="figureVulnerabilities__card">
                <img src={vulnerabilities} alt="vulnerabilities" id="imgVulnerabilities" />
            </div>
        </div>
    );
};

export default FigureVulnerabilities;