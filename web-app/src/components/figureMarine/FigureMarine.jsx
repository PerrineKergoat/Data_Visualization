import React, {useEffect, useRef, useState} from 'react';
import * as d3 from 'd3';
import './figureMarine.css';

const FigureMarine = ({selectedCountry, selectedYear, marineJSON}) => {

    const margin = { top: 40, right: 50, bottom: 60, left: 60 },
    width = 960 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom,
    colorWorld = "DarkBlue",
    colorCountry = "Blue";

    // import data from marineJSON
    const tmpMap = new Map();
    marineJSON.forEach((d) => {
        let countryName = d.Country;
        let data = d.Data;
        const pointsList = [];
        data.forEach((d) => {
            const pointsMap = new Map();
            let year = Number(d.Year);
            let value = Number(d.Value);
            pointsMap.set('year', year);
            pointsMap.set('value', value);
            pointsList.push(pointsMap);
        });
        tmpMap.set(countryName, pointsList);
    });
       
    const yMinValue = d3.min(Array.from(tmpMap.values()), (d) => d3.min(d, (d2) => d2.get('value')))
    const yMaxValue = d3.max(Array.from(tmpMap.values()), (d) => d3.max(d, (d2) => d2.get('value')))

    const xMinValue = d3.min(Array.from(tmpMap.values()), (d) => d3.min(d, (d2) => d2.get('year')))
    const xMaxValue = d3.max(Array.from(tmpMap.values()), (d) => d3.max(d, (d2) => d2.get('year')))

    const getX = d3
                .scaleTime()
                .domain([xMinValue, xMaxValue])
                .range([0, width]);

    const getY = d3
                .scaleLinear()
                .domain([yMinValue - 1, yMaxValue + 2])
                .range([height, 0]);

    const getXAxis = (ref) => {
        const xAxis = d3.axisBottom(getX);
        d3.select(ref)
        .attr("class", "x-axis")
        .call(xAxis.tickFormat(d3.format("d")));
    };

    const getYAxis = (ref) => {
        const yAxis = d3.axisLeft(getY).tickSize(-width).tickPadding(7);
        d3.select(ref)
        .attr("class", "y-axis")
        .call(yAxis);
    };

    const linePathWorld = d3
                .line()
                .x((d) => getX(d.get('year')))
                .y((d) => getY(d.get('value')))
                .curve(d3.curveMonotoneX)(tmpMap.get("World"));

    useEffect(() => {
        if (selectedCountry !== null) {
            // Remove previous path if exists, but keep the world path
            d3.select("#figureMarine")
            .select(".figureMarine__card")
            .selectAll(".countryLine")
            .remove();
            if (tmpMap.has(selectedCountry)) {
                const linePathCountry = d3
                    .line()
                    .x((d) => getX(d.get('year')))
                    .y((d) => getY(d.get('value')))
                    .curve(d3.curveMonotoneX)(tmpMap.get(selectedCountry));

                // Add new path
                d3.select("#figureMarine")
                    .select(".figureMarine__card")
                    .append("path")
                    .attr("stroke-width", 3)
                    .attr("fill", "none")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
                    .attr("stroke", colorCountry)
                    .attr("d", linePathCountry)
                    .attr("class", "countryLine");
            }
        }        

    }, [selectedCountry]);

    // Add circle for selected year
    useEffect(() => {
        if (selectedYear !== null) {
            // Remove previous circle if exists
            d3.select("#figureMarine")
            .select(".figureMarine__card")
            .selectAll(".circle")
            .remove();
            if (tmpMap.has(selectedCountry)) {
                const circle = d3.select("#figureMarine")
                    .select(".figureMarine__card")
                    .append("circle")
                    .attr("class", "circle")
                    .attr("r", 5)
                    .attr("fill", colorCountry)
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
                    .attr("cx", getX(selectedYear))
                    .attr("cy", getY(tmpMap.get(selectedCountry).find((d) => d.get('year') === selectedYear).get('value')));
            }
            // Add circle for world
            const circle = d3.select("#figureMarine")
                .select(".figureMarine__card")
                .append("circle")
                .attr("class", "circle")
                .attr("r", 5)
                .attr("fill", colorWorld)
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
                .attr("cx", getX(selectedYear))
                .attr("cy", getY(tmpMap.get("World").find((d) => d.get('year') === selectedYear).get('value')));
        }
    }, [selectedYear, selectedCountry]);

    // Add legend for selected country and world
    useEffect(() => {
        if (selectedCountry !== null) {
            // Remove previous legend if exists
            d3.select("#figureMarine")
            .select(".figureMarine__card")
            .selectAll("#legendCountry")
            .remove();
            if (tmpMap.has(selectedCountry)) {
                const legendCountry = d3.select("#figureMarine")
                    .select(".figureMarine__card")
                    .append("text")
                    .attr("class", "legendMarine")
                    .attr("id", "legendCountry")
                    .attr("x", 0)
                    .attr("y", 20)
                    .attr("fill", colorCountry)
                    .attr("transform", "translate(" + ((width+margin.left)/2 + 30) + ", " + (height + margin.top + margin.bottom/3) + ")")
                    .text(selectedCountry);
            }
        }
    }, [selectedCountry]);

    return (        
        <div className="figureMarine" id="figureMarine">
            <h3 className="figureMarine__title">Marine</h3>
            <svg
                width="100%" height="100%"
                className="figureMarine__card"
                viewBox={`0 0 ${width + margin.left + margin.right} 
                                ${height + margin.top + margin.bottom}`}
            >
            {
            // background rectangle
            }
                <rect
                    x={0} y={0}
                    width={width + margin.left + margin.right}
                    height={height + margin.top + margin.bottom}
                    fill="grey"
                    opacity={0.1}
                />
            {
            // x- and y-axes
            }
                <g className="axis" ref={getYAxis} 
                    transform={`translate(${margin.left},${margin.top})`}
                />
                <g
                    className="axis xAxis"
                    ref={getXAxis}
                    transform={`translate(${margin.left},${height + margin.top})`}
                />
            {
            // line paths
            }
                <path strokeWidth={3} fill="none" transform={`translate(${margin.left}, ${margin.top})`} stroke={colorWorld} d={linePathWorld} />
            {
            // y-axis label
            }
                <text
                    transform={"rotate(-90)"}
                    x={0 - (height + margin.top + margin.bottom) / 2 - 55} y={0 + margin.left/2 - 20} dy="1em"
                    color='black' className='axis-label'>
                    {"Percent of marine area"}
                </text>
            {
                // world legend
            }
                <text
                    className="legendMarine"
                    x={0} y={20}
                    transform={`translate(${(width+margin.left)/2 - 30},${height + margin.top + margin.bottom/3})`}
                    fill={colorWorld}
                >
                    {"World"}
                </text>
            </svg>
        </div>
    );
};

export default FigureMarine;