import React, {useEffect, useRef} from 'react';
import './figureDistrib.css';

import {createLegend, StackedBar} from '../../utils'
import * as d3 from "d3";


const FigureDistrib = ({countryIucnCatRepartition, selectedCountry}) => {

    const graphRef = useRef(null);
    const graphLegendRef = useRef(null);


    let sampleData = [
        {label: 'CR', value: 123},
        {label: 'EN', value: 10},
        {label: 'VU', value: 233},
        {label: 'LC', value: 89}
    ]

    const colors = ['#d51415', '#f5a031', '#f8cd26', '#a0a0a0'];

    const legend = createLegend({
        'Critical': colors[0],
        'Endangered': colors[1],
        'Vulnerable': colors[2],
        'Least Concern': colors[3],
    })


    useEffect(() => {
        console.log(countryIucnCatRepartition);

        graphRef.current.innerHTML = '';
        graphLegendRef.current.innerHTML = '';

        let d = countryIucnCatRepartition[selectedCountry];
        if (!d) {
            if (!selectedCountry) {
                d3.select('.figureDistrib__card_info').text('Select a country');
            } else {
                d3.select('.figureDistrib__card_info').text('Select another country');
            }
            return;
        }

        let sampleData = [
            {label: 'CR', value: d['CRITICAL']},
            {label: 'EN', value: d['ENDANGERED']},
            {label: 'VU', value: d['VULNERABLE']},
            {label: 'LC', value: d['TOT_KNOWN'] - d['CRITICAL'] - d['ENDANGERED'] - d['VULNERABLE']}
        ]
        const bar = StackedBar(sampleData, {
            colors: colors,
        })
        graphRef.current.appendChild(bar);
        graphLegendRef.current.appendChild(legend);
        d3.select('.figureDistrib__card_info').text(selectedCountry);

    }, [selectedCountry]);
    // useEffect(() => {
    //     graphRef.current.innerHTML = '';
    //     graphRef.current.appendChild(bar);
    // });


    return (
        <div className="figureDistrib" id="figureDistrib">
            <div className="figureDistrib__card">
                <h3 className='figureDistrib__card_title'>Repartition in the IUCN Categories</h3>
                <div className="figureDistrib__card_info">Select a country</div>
                <div className="figureDistrib__card_graph" ref={graphRef}></div>
                <div className="figureDistrib__card_legend" ref={graphLegendRef}></div>
            </div>
        </div>
    );
};

export default FigureDistrib;