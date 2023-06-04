
const treeData =[{
    "name": "Eukaryota",
    "parent": "null",
    "color": "black",
    "type": "black",
    "children": [
      {
        "name": "Rhodophyta (Red Algae)",
        "parent": "Eukaryota",
        "color": "black",
        "type": "black",
        "children": [
          {
            "name": "Florideophyceae",
            "parent": "Rhodophyta (Red Algae)",
            "color": "yellow",
            "type": "grey"
          }
        ]
      },
      {
        "name": "Phaeophyceae (Brown Algae)",
        "parent": "Eukaryota",
        "color": "orange",
        "type": "grey"
      },
      {
        "name": "Viridiplantae (Green Plants)",
        "parent": "Eukaryota",
        "color": "black",
        "type": "black",
        "children": [
          {
            "name": "Chlorophyta (Green Algae)",
            "parent": "Viridiplantae (Green Plants)",
            "color": "black",
            "type": "black",
            "children": [
              {
                "name": "Chlorophycae",
                "parent": "Chlorophyta (Green Algae)",
                "color": "green",
                "type": "grey"
              },
              {
                "name": "Ulvophyceae",
                "parent": "Chlorophyta (Green Algae)",
                "color": "green",
                "type": "grey"
              }
            ]
          },
          {
            "name": "Streptophyta",
            "parent": "Viridiplantae (Green Plants)",
            "color":"black",
            "type": "black",
            "children": [
              {
                "name": "Bryopsida (Mosses)",
                "parent": "Chlorophyta (Green Algae)",
                "color": "orange",
                "type": "grey"
              },
              {
                "name": "Cycadopsida (Cycads)",
                "parent": "Chlorophyta (Green Algae)",
                "color": "red",
                "type": "grey"
              },
              {
                "name": "Gnetopsida",
                "parent": "Chlorophyta (Green Algae)",
                "color": "green",
                "type": "grey"
              },
              {
                "name": "Liliopsida (Monocotyledons, Grasses)",
                "parent": "Chlorophyta (Green Algae)",
                "color": "orange",
                "type": "grey"
              },
              {
                "name": "Ginkoopsida",
                "parent": "Chlorophyta (Green Algae)",
                "color": "red",
                "type": "grey"
              },
              {
                "name": "Pinopsida (Conifers)",
                "parent": "Chlorophyta (Green Algae)",
                "color": "orange",
                "type": "grey"
              },
              {
                "name": "Andreaeopsida (Mosses)",
                "parent": "Chlorophyta (Green Algae)",
                "color": "red",
                "type": "grey"
              },
              {
                "name": "Sphagnopsida (Mosses, Sphagnum)",
                "parent": "Chlorophyta (Green Algae)",
                "color": "red",
                "type": "grey"
              },
              {
                "name": "Polytrichopsida (Mosses)",
                "parent": "Chlorophyta (Green Algae)",
                "color": "green",
                "type": "grey"
              },
              {
                "name": "Takakiopsida (Mosses)",
                "parent": "Chlorophyta (Green Algae)",
                "color": "red",
                "type": "grey"
              },
              {
                "name": "Marchantiopsida (Liverworts)",
                "parent": "Chlorophyta (Green Algae)",
                "color": "orange",
                "type": "grey"
              },
              {
                "name": "Jungermanniopsida (Liverworts)",
                "parent": "Chlorophyta (Green Algae)",
                "color": "red",
                "type": "grey"
              },
              {
                "name": "Polypodiopsida (Ferns)",
                "parent": "Chlorophyta (Green Algae)",
                "color": "orange",
                "type": "grey"
              },
              {
                "name": "Charophyceae (Green Algae)",
                "parent": "Chlorophyta (Green Algae)",
                "color": "green",
                "type": "grey"
              },
              {
                "name": "Anthocerotopsida (Hornworts)",
                "parent": "Chlorophyta (Green Algae)",
                "color": "red",
                "type": "grey"
              },
              {
                "name": "Lycopodiopsida (Lycopods)",
                "parent": "Chlorophyta (Green Algae)",
                "color": "orange",
                "type": "grey"
              }
            ]
          }
        ]
      },
      {
        "name": "Dikarya (Fungi)",
        "parent": "Eukaryota",
        "color": "black",
        "type": "black",
        "children": [
          {
            "name": "Basidiomycota",
            "parent": "Dikarya (Fungi)",
            "color":"black",
            "type": "black",
            "children": [
              {
                "name": "Ustilaginomycetes",
                "parent": "Basidiomycota",
                "color":"red",
                "type": "grey"
              },
              {
                "name": "Agaricomycetes",
                "parent": "Basidiomycota",
                "color":"orange",
                "type": "grey"
              }
            ]
          },
          {
            "name": "Ascomycota",
            "parent": "Dikarya (Fungi)",
            "color":"black",
            "type": "black",
            "children": [
              {
                "name": "Arthoniomycetes",
                "parent": "Ascomycota",
                "color":"red",
                "type": "grey"
              },
              {
                "name": "Dothideomycetes",
                "parent": "Ascomycota",
                "color":"red",
                "type": "grey"
              },
              {
                "name": "Eurothiomycetes",
                "parent": "Ascomycota",
                "color":"orange",
                "type": "grey"
              },
              {
                "name": "Lecanoromycetes",
                "parent": "Ascomycota",
                "color":"red",
                "type": "grey"
              },
              {
                "name": "Leotiomycetes",
                "parent": "Ascomycota",
                "color":"yellow",
                "type": "grey"
              },
              {
                "name": "Pezizomycetes",
                "parent": "Ascomycota",
                "color":"orange",
                "type": "grey"
              },
              {
                "name": "Sordariomycetes",
                "parent": "Ascomycota",
                "color":"orange",
                "type": "grey"
              },
              {
                "name": "Geoglossomycetes",
                "parent": "Ascomycota",
                "color":"orange",
                "type": "grey"
              }
            ]
          }
        ]
      },
      {
        "name": "Metazoa (Animals)",
        "parent": "Eukaryota",
        "color":"black",
        "type": "black",
        "children": [
          {
            "name": "Cnidaria",
            "parent": "Metazoa (Animals)",
            "color":"black",
            "type": "black",
            "children": [
              {
                "name": "Hydrozoa (Jellyfish, Corals)",
                "parent": "Cnidaria",
                "color":"orange",
                "type": "grey"
              },
              {
                "name": "Anthozoa (Anemones, Corals)",
                "parent": "Cnidaria",
                "color":"yellow",
                "type": "grey"
              }
            ]
          },
          {
            "name": "Deuterostomia",
            "parent": "Metazoa (Animals)",
            "color":"black",
            "type": "black",
            "children": [
              {
                "name": "Vertebrata",
                "parent": "Deuterostomia",
                "color":"black",
                "type": "black",
                "children": [
                  {
                    "name": "Hyperoartia (Lampreys)",
                    "parent": "Vertebrata",
                    "color":"yellow",
                    "type": "grey"
                  },
                  {
                    "name": "Mixini (Hagfish)",
                    "parent": "Vertebrata",
                    "color":"green",
                    "type": "grey"
                  },
                  {
                    "name": "Chondrichthyes (Cartilaginous Fishes)",
                    "parent": "Vertebrata",
                    "color":"orange",
                    "type": "grey"
                  },
                  {
                    "name": "Actinopterygii (Ray-finned fishes)",
                    "parent": "Vertebrata",
                    "color":"green",
                    "type": "grey"
                  },
                  {
                    "name": "Sarcopterygii (Lobe-finned fishes)",
                    "parent": "Vertebrata",
                    "color":"black",
                    "type": "black",
                    "children": [
                      {
                        "name": "Amphibia (Frogs, Salamanders, Caecilians)",
                        "parent": "Sarcopterygii",
                        "color":"orange",
                        "type": "grey"
                      },
                      {
                        "name": "Mammalia",
                        "parent": "Sarcopterygii",
                        "color":"yellow",
                        "type": "grey"
                      },
                      {
                        "name": "Reptilia: Lepidosauria - Crocodylia - Testudines (Lizards, Snakes, Crocodilians, Turtles)",
                        "parent": "Sarcopterygii",
                        "color":"yellow",
                        "type": "grey"
                      },
                      {
                        "name": "Aves (Birds)",
                        "parent": "Sarcopterygii",
                        "color":"green",
                        "type": "grey"
                      }
                    ]
                  }
                ]
              },
              {
                "name": "Echinozoa (Echinoderms)",
                "parent": "Deuterostomia",
                "type": "black",
                "color": "black",
                "children": [
                  {
                    "name": "Holothuroidea (Sea Cucumbers)",
                    "parent": "Echinozoa",
                    "color": "green",
                    "type": "grey"
                  },
                  {
                    "name": "Echinoidea (Sea Ursins)",
                    "parent": "Echinozoa",
                    "color": "green",
                    "type": "grey"
                  }
                ]
              },
              {
                "name": "Asteroidea (Sea Stars)",
                "parent": "Deuterostomia",
                "color": "red",
                "type": "grey"
              }
            ]
          },
          {
            "name": "Protostomia",
            "parent": "Metazoa (Animals)",
            "type": "black",
            "color": "black",
            "children": [
              {
                "name": "Onychophora (Velvet Worms)",
                "parent": "Protostomia",
                "type": "black",
                "color": "black",
                "children": [
                  {
                    "name": "Udeonychophora",
                    "parent": "Onychophora",
                    "color": "red",
                    "type": "grey"
                  }
                ]
              },
              {
                "name": "Nemertea (Ribbon Worms)",
                "parent": "Protostomia",
                "type": "black",
                "color": "black",
                "children": [
                  {
                    "name": "Enopla",
                    "parent": "Nemertea",
                    "color": "orange",
                    "type": "grey"
                  }
                ]
              },
              {
                "name": "Platyhelminthes (Flatworms)",
                "parent": "Protostomia",
                "type": "black",
                "color": "black",
                "children": [
                  {
                    "name": "Turbellaria",
                    "parent": "Platyhelminthes",
                    "color": "green",
                    "type": "grey"
                  }
                ]
              },
              {
                "name": "Annelida (Segmented Worms)",
                "parent": "Protostomia",
                "type": "black",
                "color": "black",
                "children": [
                  {
                    "name": "Polychaeta (Bristle Worms)",
                    "parent": "Annelida",
                    "color": "orange",
                    "type": "grey"
                  },
                  {
                    "name": "Clitellata (Earthworms)",
                    "parent": "Annelida",
                    "color": "green",
                    "type": "grey"
                  }
                ]
              },
              {
                "name": "Mollusca",
                "parent": "Protostomia",
                "type": "black",
                "color": "black",
                "children": [
                  {
                    "name": "Gastropoda (Slugs, Snails)",
                    "parent": "Mollusca",
                    "color": "yellow",
                    "type": "grey"
                  },
                  {
                    "name": "Bivalvia",
                    "parent": "Mollusca",
                    "color": "yellow",
                    "type": "grey"
                  },
                  {
                    "name": "Cephalopoda (Octopuses, Squids, Cluttlefish, ...)",
                    "parent": "Mollusca",
                    "color": "green",
                    "type": "grey"
                  },
                  {
                    "name": "Polyplacophora (Sea cradles)",
                    "parent": "Mollusca",
                    "color": "red",
                    "type": "grey"
                  },
                  {
                    "name": "Monoplacophora",
                    "parent": "Mollusca",
                    "color": "green",
                    "type": "grey"
                  }
                ]
              },
              {
                "name": "Arthropoda",
                "parent": "Protostomia",
                "type": "black",
                "children": [
                  {
                    "name": "Arachnida",
                    "parent": "Arthropoda",
                    "color": "rorange",
                    "type": "grey"
                  },
                  {
                    "name": "Merostomata (Horseshoe crabs)",
                    "parent": "Arthropoda",
                    "color": "orange",
                    "type": "grey"
                  },
                  {
                    "name": "Diplopoda (Millipedes)",
                    "parent": "Arthropoda",
                    "color": "orange",
                    "type": "grey"
                  },
                  {
                    "name": "Chilopoda (Centipedes)",
                    "parent": "Arthropoda",
                    "color": "red",
                    "type": "grey"
                  },
                  {
                    "name": "Insecta",
                    "parent": "Arthropoda",
                    "color": "yellow",
                    "type": "grey"
                  },
                  {
                    "name": "Collembola (Springtails)",
                    "parent": "Arthropoda",
                    "color": "orange",
                    "type": "grey"
                  },
                  {
                    "name": "Branchiopoda (Fairy Shrimps, Clam Shrimps, ...)",
                    "parent": "Arthropoda",
                    "color": "red",
                    "type": "grey"
                  },
                  {
                    "name": "Hexanauplia",
                    "parent": "Arthropoda",
                    "color": "red",
                    "type": "grey"
                  },
                  {
                    "name": "Malacostraca (Crabs, Lobsters, Shrimps, ...)",
                    "parent": "Arthropoda",
                    "color": "yellow",
                    "type": "grey"
                  },
                  {
                    "name": "Ostracoda (Seed Shrimps)",
                    "parent": "Arthropoda",
                    "color": "red",
                    "type": "grey"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }] ;

// ************** Generate the tree diagram	 *****************  https://gist.github.com/d3noob/8375092

var margin = {top: 20, right: 20, bottom:20, left: 100},
    width = 2000 - margin.right - margin.left,
    height = 2200 - margin.top - margin.bottom;

var i = 0,
    duration = 750,
    root;

var tree = d3.layout.tree()
    .size([height, width]);

var diagonal = d3.svg.diagonal()
    .projection(function(d) { return [d.y, d.x]; });

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.right + margin.left)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    //.style("fill", "blue")



root = treeData[0];
root.x0 = height / 2;
root.y0 = 0;

update(root);

d3.select(self.frameElement).style("height", "500px");

function update(source) {

    // Compute the new tree layout.
    var nodes = tree.nodes(root).reverse(),
        links = tree.links(nodes);
    
    // Normalize for fixed-depth.
    nodes.forEach(function(d) { d.y = d.depth * 250; });
    
    // Update the nodes…
    var node = svg.selectAll("g.node")
        .data(nodes, function(d) { return d.id || (d.id = ++i); });
    
    // Enter any new nodes at the parent's previous position.
    var nodeEnter = node.enter().append("g")
        .attr("class", "node")
        .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
        .on("click", click);
    
    nodeEnter.append("circle")
        .attr("r", 1e-6)
        .style("fill", function(d) { return d._children ? "lightcoral" : "#fff"; })
        .style("stroke", function(d) { return d.color; });
    
    nodeEnter.append("text")
        .attr("x", function(d) { return d.children || d._children ? -14 : 14; })
        .attr("dy", ".35em")
        .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
        .text(function(d) { return d.name; })
        .style("fill-opacity", 1e-6)
        .style("fill", function(d) { return d.type; });
    
    // Transition nodes to their new position.
    var nodeUpdate = node.transition()
        .duration(duration)
        .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });
    
    nodeUpdate.select("circle")
        .attr("r", 10)
        .style("fill", function(d) { return d._children ? "lightcoral" : "#fff"; });
    
    nodeUpdate.select("text")
        .style("fill-opacity", 1);
    
    // Transition exiting nodes to the parent's new position.
    var nodeExit = node.exit().transition()
        .duration(duration)
        .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
        .remove();
    
    nodeExit.select("circle")
        .attr("r", 1e-6);
    
    nodeExit.select("text")
        .style("fill-opacity", 1e-6);
    
    // Update the links…
    var link = svg.selectAll("path.link")
        .data(links, function(d) { return d.target.id; });
    
    // Enter any new links at the parent's previous position.
    link.enter().insert("path", "g")
        .attr("class", "link")
        .attr("d", function(d) {
        var o = {x: source.x0, y: source.y0};
        return diagonal({source: o, target: o});
    });
    
    // Transition links to their new position.
    link.transition()
        .duration(duration)
        .attr("d", diagonal);
    
    // Transition exiting nodes to the parent's new position.
    link.exit().transition()
        .duration(duration)
        .attr("d", function(d) {
            var o = {x: source.x, y: source.y};
            return diagonal({source: o, target: o});
        })
        .remove();
    
    // Stash the old positions for transition.
    nodes.forEach(function(d) {
        d.x0 = d.x;
        d.y0 = d.y;
        });
    }
    
    // Toggle children on click.
    function click(d) {
        if (d.children) {
            d._children = d.children;
            d.children = null;
        } else {
            d.children = d._children;
            d._children = null;
        }
        update(d);
    }

