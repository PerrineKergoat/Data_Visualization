import React, {useEffect, useRef} from 'react';
import './figureDistrib.css';

import {StackedBar} from '../../utils'


const FigureDistrib = ({countryIucnCatRepartition, selectedCountry}) => {

    const graphRef = useRef(null);


    let sampleData = [
        {label: 'CR', value: 123},
        {label: 'EN', value: 10},
        {label: 'VU', value: 233},
        {label: 'LC', value: 89}
    ]


    useEffect(() => {
        console.log(countryIucnCatRepartition);

        let d = countryIucnCatRepartition[selectedCountry];
        if (!d) {
            graphRef.current.innerHTML = '';
            return;
        }

        let sampleData = [
            {label: 'CR', value: d['CRITICAL']},
            {label: 'EN', value: d['ENDANGERED']},
            {label: 'VU', value: d['VULNERABLE']},
            {label: 'LC', value: d['TOT_KNOWN'] - d['CRITICAL'] - d['ENDANGERED'] - d['VULNERABLE']}
        ]
        const bar = StackedBar(sampleData, {
            colors: ['#d51415', '#f5a031', '#f8cd26', '#a0a0a0'],
        })
        graphRef.current.innerHTML = '';
        graphRef.current.appendChild(bar);


    }, [selectedCountry]);
    // useEffect(() => {
    //     graphRef.current.innerHTML = '';
    //     graphRef.current.appendChild(bar);
    // });


    return (
        <div className="figureDistrib" id="figureDistrib">
            <div className="figureDistrib__card">
                <h3 className='figureMap__card_title'>Repartition in the IUCN Categories</h3>
                <div className="figureDistrib__card_graph" ref={graphRef}></div>
            </div>
        </div>
    );
};

export default FigureDistrib;