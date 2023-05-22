import './figureMap.css';
import React, {useEffect, useRef, useState} from 'react';
import worldMap from '../../data/worldMap.geojson';
import * as d3 from 'd3';

const FigureMap = ({selectedCountry, setSelectedCountry, selectedYear, iucnRedListCSV}) => {

    const mapColor = '#a8a8a8';

    let projection = d3.geoMercator()
        .center([0, 50]);

    let geoGenerator = d3.geoPath()
        .projection(projection);

    const colorScale = d3.scaleLinear().domain([0.5, 1]).range(['#ffffff', '#bb0000']);

    const borderRef = useRef(null);


    // create a map of country names and their corresponding colors from the csv
    // the map is {(countryName, year): color}
    const [countryColorMap, setCountryColorMap] = useState(null);
    useEffect(() => {

        d3.csv(iucnRedListCSV).then((data) => {
            const tmpMap = new Map();
            data.forEach((d) => {
                let countryName = d.Country;
                let year = d.Year;
                let color = colorScale(d['Value']);
                tmpMap.set((countryName + year), [d['Value'], color]);
            });
            setCountryColorMap(tmpMap);
        });
    }, []);

    useEffect(() => {
        console.log('countryColorMap changed:', countryColorMap);
    }, [countryColorMap]);


    function handleMouseover(e, d) {
        // displau name and iucn value of the country
        d3.select('.figureMap__card_info').text(d.properties.name + ' ' + e.target.getAttribute('iucn'));

    }

    function handleMouseClick(e, d) {
        // set the selected country
        setSelectedCountry(d.properties.name);
    }


    function update(geojson) {
        let u = d3.select('.figureMap__card g.map')
            .selectAll('path')
            .data(geojson.features);

        u.enter()
            .append('path')
            .attr('d', geoGenerator)
            .style('fill', mapColor)
            .style('stroke', null)
    }

    d3.json(worldMap).then((data) => {
        update(data);
    });

    useEffect(() => {
        console.log('selectedYear changed');

        // update the map color when the selected year changes
        d3.select('.figureMap__card g.map')
            .selectAll('path')
            .style('fill', function (d) {
                let countryName = d.properties.name;
                let color = countryColorMap.get((countryName + selectedYear));
                if (color === undefined) {
                    return mapColor;
                } else {
                    return color[1];
                }
            })
            .on('mouseover', handleMouseover)
            .on('click', handleMouseClick);


        // add a new attribute to each country path, which is the iucn value
        d3.select('.figureMap__card g.map')
            .selectAll('path')
            .attr('iucn', function (d) {
                let countryName = d.properties.name;
                let iucn = countryColorMap.get((countryName + selectedYear));
                if (iucn === undefined) {
                    return 'N/A';
                } else {
                    return iucn[0];
                }
            });

        // copy the border of the selected country to the end of the svg and set it to 2px
        if (selectedCountry !== null) {
            let border = d3.select('.figureMap__card g.map')
                .selectAll('path')
                .filter(function (d) {
                    return d.properties.name === selectedCountry;
                });

            // copy d of the selected country
            let path = border.node().cloneNode(true);

            // set the border to 2px
            d3.select(path).style('stroke', 'black').style('stroke-width', '2px');

            // user borderRef to access the border element
            borderRef.current.innerHTML = '';
            borderRef.current.appendChild(path);

        }

    }, [selectedYear, countryColorMap, selectedCountry]);

    return (
        <div className="figureMap__card">
            <div className="figureMap__card_info">Hover over a country</div>
            <svg id="svgmap" viewBox="0 0 1000 600">
                <g className="map"></g>
                <g className='border' ref={borderRef}></g>
            </svg>
        </div>
    );
};

export default FigureMap;
