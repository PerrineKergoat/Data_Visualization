import './slider.css';
import React, {useEffect, useRef, useState} from 'react';
import * as d3 from 'd3';

const Slider = ({selectedYear, setSelectedYear}) => {
    // Horizontal discrete slider from 2001 to 2021

    var sliderNotCreated = true;
    useEffect(() => {
        if (sliderNotCreated) {
            d3.select(".sliderDiv")
                .append("input")
                .attr("type", "range")
                .attr("min", 2001)
                .attr("max", 2021)
                .attr("value", selectedYear)
                .attr("class", "slider")
                .on("input", function() {
                    setSelectedYear(Number(this.value));
                });
            sliderNotCreated = false;
        }
    }, []);

    return (
        <div className="sliderDiv">

        </div>
    );
};

export default Slider;
