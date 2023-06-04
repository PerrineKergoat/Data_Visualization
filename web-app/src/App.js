import './App.css';
import {
    FigureDistrib,
    FigureMap,
    FigureMarine,
    FigureTerrestrial,
    FigureTree,
    FigureTreeCountry,
    FigureTreeWorld,
    Header,
    Navbar
} from "./components";
import React, {useState} from "react";
import iucn_red_list from "./data/iucn_red_list.csv";
import countryIucnCatRepartition from "./data/country_iucn_cat_repartition.json";
import countrySpeciesRepartition from "./data/country_species_repartition.json";
import terrestial from "./data/country_terrestrial_protected_area.json";
import marine from "./data/country_marine_protected_area.json";

function App() {

    const [selectedYear, setSelectedYear] = useState(2020);
    const [selectedCountry, setSelectedCountry] = useState(null);

    const [iucnRedListCSV] = useState(iucn_red_list);

    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar/>
                <Header/>
            </div>
            <div id="content">
                <div className='figures' id="map_related_figures">
                    <div>
                        <FigureMap selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry}
                                   selectedYear={selectedYear} iucnRedListCSV={iucnRedListCSV}/>
                    </div>
                    <div>
                        <FigureDistrib countryIucnCatRepartition={countryIucnCatRepartition}
                                       countrySpeciesRepartition={countrySpeciesRepartition}
                                       selectedCountry={selectedCountry}/>

                    </div>
                </div>
                <div className='figures' id="protected_areas_figures">
                    <h1 id="protected_areas_figures__title">Protected areas by year</h1>
                    <table className='graphTable'>
                        <tbody>
                        <tr className='graphTR'>
                            <td className='graphTD'>
                                <FigureTerrestrial selectedCountry={selectedCountry} selectedYear={selectedYear} terrestrialJSON={terrestial}/>
                            </td>
                        </tr>
                        <tr className='graphTR'>
                            <td className='graphTD'>
                                <FigureMarine selectedCountry={selectedCountry} selectedYear={selectedYear} marineJSON={marine} />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className='figures' id="species_tree_figures">
                    <table>
                        <tbody>
                        <tr>
                            <td rowSpan="2">
                                <FigureTree/>
                            </td>
                            <td>
                                <FigureTreeWorld/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <FigureTreeCountry/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default App;
