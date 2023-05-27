import React, {useEffect, useRef} from 'react';
import './figureDistrib.css';
import * as d3 from 'd3';

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
        d3.csv(countryIucnCatRepartition).then((data) => {
            //     Country,IUCN,Value
            for (let i = 0; i < data.length; i++) {
                let d = data[i];
                console.log(d);
                console.log(selectedCountry);
                if (d.Country === selectedCountry) {
                    let sampleData = [
                        {label: 'CR', value: d.CR},
                        {label: 'EN', value: d.EN},
                        {label: 'VU', value: d.VU},
                        {label: 'LC', value: d.LC}
                    ]
                    const bar = StackedBar(sampleData, {
                        colors: ['#d51415', '#f5a031', '#f8cd26', '#a0a0a0'],
                    })
                    console.log(bar);
                    graphRef.current.innerHTML = '';
                    graphRef.current.appendChild(bar);
                    break;
                }
            }
        });
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