import './App.css';
import {Figure1, Figure2, Header, Navbar} from "./components";

function App() {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar/>
                <Header/>
            </div>
            <Figure1/>
            <Figure2/>
        </div>
    );
}

export default App;
