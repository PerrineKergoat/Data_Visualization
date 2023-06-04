import React from 'react';
import './figureTree.css';

const FigureTree = () => {
    return (
        <div className="figureTree" id="figureTree">

            <div className="figureTree__card">
                <h1 className='figureMap__card_title'>Phylogenetic tree</h1>

                <iframe src="https://gavinkaa.github.io/dataviz_iframe/" width="100%" height="1000px" frameBorder="0">

                </iframe>
            </div>
        </div>
    );
};

export default FigureTree;
