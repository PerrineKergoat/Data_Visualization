import * as d3 from 'd3';


//-----LEGEND-----//
// Copyright 2021, Observable Inc.
// Released under the ISC license.
// https://observablehq.com/@d3/color-legend
export function MapLegend(color, {

    title,
    tickSize = 6,
    width = 320,
    height = 44 + tickSize,
    marginTop = 18,
    marginRight = 0,
    marginBottom = 16 + tickSize,
    marginLeft = 0,
    ticks = width / 64,
    tickFormat,
    tickValues
} = {}) {

    function ramp(color, n = 256) {
        const canvas = document.createElement("canvas");
        canvas.width = n;
        canvas.height = 1;
        const context = canvas.getContext("2d");
        for (let i = 0; i < n; ++i) {
            context.fillStyle = color(i / (n - 1));
            context.fillRect(i, 0, 1, 1);
        }
        return canvas;
    }

    const svg = d3.create("svg")
        .attr("width", "40%")
        .attr("viewBox", [0, 0, width, height])
        .style("overflow", "visible")
        .style("display", "block");

    let tickAdjust = g => g.selectAll(".tick line").attr("y1", marginTop + marginBottom - height);
    let x;

    // Continuous
    if (color.interpolate) {
        const n = Math.min(color.domain().length, color.range().length);

        x = color.copy().rangeRound(d3.quantize(d3.interpolate(marginLeft, width - marginRight), n));

        svg.append("image")
            .attr("x", marginLeft)
            .attr("y", marginTop)
            .attr("width", width - marginLeft - marginRight)
            .attr("height", height - marginTop - marginBottom)
            .attr("preserveAspectRatio", "none")
            .attr("xlink:href", ramp(color.copy().domain(d3.quantize(d3.interpolate(0, 1), n))).toDataURL());
    }

    // Sequential
    else if (color.interpolator) {
        x = Object.assign(color.copy()
                .interpolator(d3.interpolateRound(marginLeft, width - marginRight)),
            {
                range() {
                    return [marginLeft, width - marginRight];
                }
            });

        svg.append("image")
            .attr("x", marginLeft)
            .attr("y", marginTop)
            .attr("width", width - marginLeft - marginRight)
            .attr("height", height - marginTop - marginBottom)
            .attr("preserveAspectRatio", "none")
            .attr("xlink:href", ramp(color.interpolator()).toDataURL());

        // scaleSequentialQuantile doesn’t implement ticks or tickFormat.
        if (!x.ticks) {
            if (tickValues === undefined) {
                const n = Math.round(ticks + 1);
                tickValues = d3.range(n).map(i => d3.quantile(color.domain(), i / (n - 1)));
            }
            if (typeof tickFormat !== "function") {
                tickFormat = d3.format(tickFormat === undefined ? ",f" : tickFormat);
            }
        }
    }

    // Threshold
    else if (color.invertExtent) {
        const thresholds
            = color.thresholds ? color.thresholds() // scaleQuantize
            : color.quantiles ? color.quantiles() // scaleQuantile
                : color.domain(); // scaleThreshold

        const thresholdFormat
            = tickFormat === undefined ? d => d
            : typeof tickFormat === "string" ? d3.format(tickFormat)
                : tickFormat;

        x = d3.scaleLinear()
            .domain([-1, color.range().length - 1])
            .rangeRound([marginLeft, width - marginRight]);

        svg.append("g")
            .selectAll("rect")
            .data(color.range())
            .join("rect")
            .attr("x", (d, i) => x(i - 1))
            .attr("y", marginTop)
            .attr("width", (d, i) => x(i) - x(i - 1))
            .attr("height", height - marginTop - marginBottom)
            .attr("fill", d => d);

        tickValues = d3.range(thresholds.length);
        tickFormat = i => thresholdFormat(thresholds[i], i);
    }

    // Ordinal
    else {
        x = d3.scaleBand()
            .domain(color.domain())
            .rangeRound([marginLeft, width - marginRight]);

        svg.append("g")
            .selectAll("rect")
            .data(color.domain())
            .join("rect")
            .attr("x", x)
            .attr("y", marginTop)
            .attr("width", Math.max(0, x.bandwidth() - 1))
            .attr("height", height - marginTop - marginBottom)
            .attr("fill", color);

        tickAdjust = () => {
        };
    }

    svg.append("g")
        .attr("transform", `translate(0,${height - marginBottom})`)
        .call(d3.axisBottom(x)
            .ticks(ticks, typeof tickFormat === "string" ? tickFormat : undefined)
            .tickFormat(typeof tickFormat === "function" ? tickFormat : undefined)
            .tickSize(tickSize)
            .tickValues(tickValues))
        .call(tickAdjust)
        .call(g => g.select(".domain").remove())
        .call(g => g.append("text")
            .attr("x", marginLeft)
            .attr("y", marginTop + marginBottom - height - 6)
            .attr("fill", "currentColor")
            .attr("text-anchor", "start")
            .attr("font-weight", "bold")
            .attr("class", "title")
            .text(title));

    return svg.node();
}

// Was adapted and made responsive
// from https://observablehq.com/@eesur/d3-single-stacked-bar
export function StackedBar(data, {
    barHeight = 70,
    f = d3.format('.1f'),
    margin = {top: 20, right: 10, bottom: 20, left: 10},
    colors = ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33"]
} = {}) {
    // Have a total of values for reference from the data:
    const total = d3.sum(data, (d) => d.value);

    // Format the data (instead of using d3.stack()) and filter out 0 values:
    function groupDataFunc(data) {
        // use a scale to get percentage values
        const percent = d3
            .scaleLinear()
            .domain([0, total])
            .range([0, 100]);
        // filter out data that has zero values
        // also get mapping for next placement
        // (save having to format data for d3 stack)
        let cumulative = 0;
        const _data = data
            .map((d) => {
                cumulative += d.value;
                return {
                    value: d.value,
                    // want the cumulative to prior value (start of rect)
                    cumulative: cumulative - d.value,
                    label: d.label,
                    percent: percent(d.value),
                };
            })
            .filter((d) => d.value > 0);
        return _data;
    }

    const groupData = groupDataFunc(data);

    const svg = d3
        .create("svg")
        .attr("class", "stacked-bar-chart")
        .attr("viewBox", "0 0 300 150")
        .style("width", "500px")
        .style("max-height", "100%")
        .style("max-width", "100%");

    const sel = d3.select(svg.node());

    // set up scales for horizontal placement
    const xScale = d3.scaleLinear().domain([0, total]).range([0, 100]);

    const join = sel
        .selectAll("g")
        .data(groupData)
        .join("g")
        .attr(
            "transform",
            `translate(${margin.left} ${margin.top})`
        );

    // stack rect for each data value
    const rects = join
        .append("rect")
        .attr("class", "rect-stacked")
        .attr("x", (d) => xScale(d.cumulative) + "%")
        .attr("y", "15%")
        .attr("height", barHeight)
        .attr("width", (d) => xScale(d.value) + "%")
        .style("fill", (d, i) => colors[i]);

    // add values on bar
    const valueTexts = join
        .append("text")
        .attr("class", "text-value")
        .attr("text-anchor", "middle")
        .attr("x", (d) => xScale(d.cumulative) + xScale(d.value) / 2 + "%")
        .attr("y", "13%")
        .style("font-weight", "bold")
        .text((d) => d.value);

    // add some labels for percentages
    const percentTexts = join
        .append("text")
        .attr("class", "text-percent")
        .attr("text-anchor", "middle")
        .attr("x", (d) => xScale(d.cumulative) + xScale(d.value) / 2 + "%")
        .attr("y", "70%")
        .style("font-weight", "bold")
        .text((d) => f(d.percent) + " %");

    // add the labels
    const labelTexts = join
        .append("text")
        .attr("class", "text-label")
        .attr("text-anchor", "middle")
        .attr("x", (d) => xScale(d.cumulative) + xScale(d.value) / 2 + "%")
        .attr("y", "80%")
        .style("fill", (d, i) => colors[i])
        .style("font-weight", "bold")
        .text((d) => d.label);

    valueTexts.style("opacity", 0);
    percentTexts.style("opacity", 0);
    labelTexts.style("opacity", 0);

    join.on("mouseover", function () {
        const bar = d3.select(this);
        bar.select(".text-value").style("opacity", 1);
        bar.select(".text-percent").style("opacity", 1);
        bar.select(".text-label").style("opacity", 1);
    });

    join.on("mouseout", function () {
        const bar = d3.select(this);
        bar.select(".text-value").style("opacity", 0);
        bar.select(".text-percent").style("opacity", 0);
        bar.select(".text-label").style("opacity", 0);
    });


    return svg.node();
}

export function createLegend(labelColorMap) {
    // Select the svg area
    const svg_base = d3
        .create("svg")
        .attr("class", "stacked-bar-chart")
        .attr("viewBox", "0 0 300 150")
        .style("width", "500px")
        // .style("height", "100px")
        .style("max-height", "100%")
        .style("max-width", "100%");
    const svg = d3.select(svg_base.node());

    // Extract the keys and colors from the labelColorMap
    let keys = Object.keys(labelColorMap);
    let colors = Object.values(labelColorMap);

    console.log(keys);
    console.log(colors);

    // Define the color scale
    let color = d3.scaleOrdinal()
        .domain(keys)
        .range(colors);

    // Add dots in the legend for each name
    let size = 15;
    svg.selectAll("color_squares")
        .data(keys)
        .enter()
        .append("rect")
        .attr("x", 10)
        .attr("y", function (d, i) {
            return i * (size + 5);
        })
        .attr("width", size)
        .attr("height", size)
        .style("fill", function (d) {
            return color(d);
        });

    // Add labels in the legend for each name
    svg.selectAll("labels")
        .data(keys)
        .enter()
        .append("text")
        .attr("x", 10 + size * 1.2)
        .attr("y", function (d, i) {
            return i * (size + 5) + (size / 2);
        })
        // .style("fill", function (d) {
        //     return color(d);
        // })
        .text(function (d) {
            return d;
        })
        .attr("text-anchor", "left")
        .style("alignment-baseline", "middle");

    return svg.node();
}
