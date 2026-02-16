// src/App.jsx:1

import MapComponent from "./components/MapComponent";
import SpecificMap from "./components/SpecificMap.jsx";
import {restaurants} from "./data/restaurants.js";

function App() {
    return (
        <div style={{ height: "100vh", width: "100%", overflow: "hidden" }}>
            <div style={{ height: "300px", width: "300px", overflow: "hidden" }}>
                <MapComponent />
            </div>
            <p>Specific</p>
            <div style={{ height: "300px", width: "300px", overflow: "hidden" }}>
                <SpecificMap restaurant={restaurants[0]} />
            </div>
        </div>
    )
}

export default App;
