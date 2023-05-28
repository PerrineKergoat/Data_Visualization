import React, {useEffect, useRef} from 'react';
import './figureVulnerabilities.css';
import * as d3 from "d3";
import {createLegend, createStackedBarChart} from "../../utils";
const FigureVulnerabilities = ({countrySpeciesRepartition, selectedCountry}) => {


    const graphRef = useRef(null);
    const graphLegendRef = useRef(null);

    const colors = ['#d51415', '#f5a031', '#f8cd26', '#a0a0a0'];
    const colorsMap = {
        'CRITICAL': colors[0],
        'ENDANGERED': colors[1],
        'VULNERABLE': colors[2],
        'LEAST_CONCERN': colors[3],
    }

    const legend = createLegend({
        'Critical': colors[0],
        'Endangered': colors[1],
        'Vulnerable': colors[2],
        'Least Concern': colors[3],
    })


    useEffect(() => {

        graphRef.current.innerHTML = '';
        // graphLegendRef.current.innerHTML = '';

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
        graphRef.current.appendChild(bar);
        // graphLegendRef.current.appendChild(legend);
        d3.select('.figureVulnerabilities__card_info').text(selectedCountry);

    }, [selectedCountry]);


    return (
        <div className="figureVulnerabilities" id="figureVulnerabilities">
            <div className="figureVulnerabilities__card">
                <h3 className='figureVulnerabilities__card_title'>Repartition in the IUCN Categories</h3>
                <div className="figureVulnerabilities__card_info">Select a country</div>
                <div className="figureVulnerabilities__card_graph" ref={graphRef}></div>
                {/*<div className="figureVulnerabilities__card_legend" ref={graphLegendRef}></div>*/}
            </div>
        </div>
    );

};

export default FigureVulnerabilities;