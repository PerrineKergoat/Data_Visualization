import React, {useEffect, useRef} from 'react';
import './figureDistrib.css';
import {StackedBar} from '../../utils'


const FigureDistrib = ({countryIucnCatRepartition, selectedCountry}) => {

    const graphRef = useRef(null);


    let sampleData = [
        {label: 'Test 0 which should not render', value: 0},
        {label: 'Group-1', value: 55},
        {label: 'Group-2', value: 233},
        {label: 'Test 0 AGAIN which should not render', value: 0},
        {label: 'Group-3', value: 89}
    ]
    const bar = StackedBar(sampleData, {
        colors: ['#ff616b', '#fa9442', '#bf36e0']
    })

    useEffect(() => {
        graphRef.current.innerHTML = '';
        graphRef.current.appendChild(bar);
    });


    return (
        <div className="figureDistrib" id="figureDistrib">
            <div className="figureDistrib__card">
                <div className="figureDistrib__card_graph" ref={graphRef}></div>
            </div>
        </div>
    );
};

export default FigureDistrib;