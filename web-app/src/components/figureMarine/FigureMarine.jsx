import React, {useEffect, useRef, useState} from 'react';
import * as d3 from 'd3';
import './figureMarine.css';

const FigureMarine = ({selectedCountry, selectedYear, marineJSON}) => {

    const margin = { top: 40, right: 50, bottom: 60, left: 50 },
    width = 960 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom,
    colorWorld = "DarkOrange",
    colorCountry = "DarkRed";

    console.log("marineJSON", marineJSON);

    // import data from marineJSON
    const tmpMap = new Map();
    marineJSON.forEach((d) => {
        let countryName = d.Country;
        let data = d.Data;
        console.log("data", data);
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
        d3.select(ref).call(xAxis.tickFormat(d3.format("d")));
    };

    const getYAxis = (ref) => {
        const yAxis = d3.axisLeft(getY).tickSize(-width).tickPadding(7);
        d3.select(ref).call(yAxis);
    };

    const linePathWorld = d3
                .line()
                .x((d) => getX(d.get('year')))
                .y((d) => getY(d.get('value')))
                .curve(d3.curveMonotoneX)(tmpMap.get("World"));

    // Add legend for world
    const legend = d3.select("#figureMarine")
        .select(".figureMarine__card")
        .append("text")
        .attr("class", "legend")
        .attr("x", 0)
        .attr("y", 20)
        .attr("transform", "translate(0," + margin.top + ")")
        .attr("fill", colorWorld)
        .text("World");

    useEffect(() => {
        if (selectedCountry !== null) {
            // Remove previous path if exists, but keep the world path
            d3.select("#figureMarine")
            .select(".figureMarine__card")
            .selectAll(".countryLine")
            .remove();
            if (tmpMap.has(selectedCountry)) {
                console.log("selectedCountry: ", selectedCountry);
                // log type of selectedCountry
                console.log("type of selectedCountry: ", typeof selectedCountry);
                console.log("tmpMap.get(selectedCountry): ", tmpMap.get(selectedCountry));
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
                    .attr("transform", "translate(" + margin.left + ",0)")
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
    }, [selectedYear]);

    // Add legend for selected country and world
    useEffect(() => {
        if (selectedCountry !== null) {
            // Remove previous legend if exists
            d3.select("#figureMarine")
            .select(".figureMarine__card")
            .selectAll(".legendCountry")
            .remove();
            if (tmpMap.has(selectedCountry)) {
                const legend = d3.select("#figureMarine")
                    .select(".figureMarine__card")
                    .append("text")
                    .attr("class", "legendCountry")
                    .attr("x", 0)
                    .attr("y", 0)
                    .attr("fill", colorCountry)
                    .attr("transform", "translate(0," + margin.top + ")")
                    .text(selectedCountry);
            }
        }
    }, [selectedCountry]);

    return (        
        <div className="figureMarine" id="figureMarine">
            <h5 className="figureMarine__title">Marine</h5>
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
                    x={0 - (height + margin.top + margin.bottom) / 2 - 40} y={0 + margin.left/2 - 20} dy="1em"
                    color='black'>
                    {"Percent of land area"}
                </text>
            </svg>
        </div>
    );
};

export default FigureMarine;