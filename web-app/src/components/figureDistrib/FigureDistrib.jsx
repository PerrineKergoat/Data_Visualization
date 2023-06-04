import React, {useEffect, useRef} from 'react';
import './figureDistrib.css';

import {createLegend, createStackedBarChart, StackedBar} from '../../utils'
import * as d3 from "d3";


const FigureDistrib = ({countryIucnCatRepartition, countrySpeciesRepartition, selectedCountry}) => {

    const graphRefGeneral = useRef(null);
    const graphRefSpecies = useRef(null);
    const graphLegendRef = useRef(null);

    const colors = ['#d51415', '#f5a031', '#f8cd26', '#a0a0a0'];

    const legend = createLegend({
        'Critical': colors[0],
        'Endangered': colors[1],
        'Vulnerable': colors[2],
        'Least Concern': colors[3],
    })

    const colorsMap = {
        'CRITICAL': colors[0],
        'ENDANGERED': colors[1],
        'VULNERABLE': colors[2],
        'LEAST_CONCERN': colors[3],
    }

    useEffect(() => {

        graphRefSpecies.current.innerHTML = '';

        const tmp_data = countrySpeciesRepartition[selectedCountry];
        const data = tmp_data ? JSON.parse(JSON.stringify(tmp_data)) : tmp_data;


        if (!data) {
            if (!selectedCountry) {
                d3.select('.figureVulnerabilities__card_info').text('Select a country');
            } else {
                d3.select('.figureVulnerabilities__card_info').text('Select another country');
            }
            return;
        }

        for (const category in data) {
            // Find the category object with "TOT_KNOWN" as the category value
            const totKnownCategory = data[category].find(obj => obj.category === "TOT_KNOWN");

            // Calculate the "LEAST_CONCERN" value
            const leastConcernValue = totKnownCategory.value - data[category]
                .filter(obj => obj.category !== "TOT_KNOWN")
                .reduce((total, obj) => total + obj.value, 0);

            // Replace the "TOT_KNOWN" category object with "LEAST_CONCERN"
            totKnownCategory.category = "LEAST_CONCERN";
            totKnownCategory.value = leastConcernValue;
        }


        const bar = createStackedBarChart(data, colorsMap);
        graphRefSpecies.current.appendChild(bar);
        // graphLegendRef.current.appendChild(legend);
        d3.select('.figureVulnerabilities__card_info').text(selectedCountry);

    }, [selectedCountry]);



    useEffect(() => {

        graphRefGeneral.current.innerHTML = '';
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

        let data = [
            {label: 'CR', value: d['CRITICAL']},
            {label: 'EN', value: d['ENDANGERED']},
            {label: 'VU', value: d['VULNERABLE']},
            {label: 'LC', value: d['TOT_KNOWN'] - d['CRITICAL'] - d['ENDANGERED'] - d['VULNERABLE']}
        ]
        const bar = StackedBar(data, {
            colors: colors,
        })
        graphRefGeneral.current.appendChild(bar);
        graphLegendRef.current.appendChild(legend);
        d3.select('.figureDistrib__card_info').text(selectedCountry);

    }, [selectedCountry]);


    return (
        <div className="figureDistrib" id="figureDistrib">
            <div className="figureDistrib__card">
                <h1 className='figureDistrib__card_title'>Repartition in the IUCN Categories</h1>
                <div className="figureDistrib__card_info">Select a country</div>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            <div className="figureDistrib__card_graph_general" ref={graphRefGeneral}></div>
                        </td>
                        <td>
                            <div className="figureDistrib__card_graph_species" ref={graphRefSpecies}></div>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div className="figureDistrib__card_legend" ref={graphLegendRef}></div>
            </div>
        </div>
    );
};

export default FigureDistrib;