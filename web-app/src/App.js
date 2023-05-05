import './App.css';
import {
    Header,
    Navbar,
    FigureMap,
    FigureVulnerabilities,
    FigureTerrestrial,
    FigureMarine,
    FigureTree,
    FigureDistrib,
    FigureTreeCountry,
    FigureTreeWorld
} from "./components";
import React from "react";

function App() {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar/>
                <Header/>
            </div>
            <div id="content">
                <div className='figures' id="map_related_figures">
                    <div>
                        <FigureMap/>
                    </div>
                    <div>
                        <table>
                            <tbody>
                            <tr>
                                <td>
                                    <FigureDistrib/>
                                </td>
                                <td>
                                    <FigureVulnerabilities/>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='figures' id="protected_areas_figures">
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                <FigureTerrestrial/>
                            </td>
                            <td>
                                <FigureMarine/>
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
