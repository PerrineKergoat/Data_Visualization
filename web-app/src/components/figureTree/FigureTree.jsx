import React from 'react';
import tree from '../../assets/tree.jpg';
import './figureTree.css';

const FigureTree = () => {
    return (
        <div className="figureTree" id="figureTree">
            <div className="figureTree__card">
                <img src={tree} alt="tree" id="imgTree" />
            </div>
        </div>
    );
};

export default FigureTree;