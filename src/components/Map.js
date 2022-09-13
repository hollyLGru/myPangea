import React, { useState } from 'react';
import {ComposableMap, Geographies, Geography} from 'react-simple-maps';
import ReactToolTip from 'react-tooltip'

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-continents.json";


export default function Map() {


// function generateRandomColor(){
//     let maxVal = 0xFFFFFF; // 16777215
//     let randomNumber = Math.random() * maxVal; 
//     randomNumber = Math.floor(randomNumber);
//     randomNumber = randomNumber.toString(16);
//     let randColor = randomNumber.padStart(6, 0);   
//     return `#${randColor.toUpperCase()}`
// }

const [content, setContent] = useState("")

return (
    <div className="Map" style={{
        width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyConent: "center", alignItems: "center"
    }}>

        <p>Continent Map</p>
        
        <ReactToolTip>{content}</ReactToolTip>
        <div style={{width:"50%"}}>
            <ComposableMap data-tip="">
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map((geo) => (
                            <Geography key={geo.rsmKey} geography={geo} onMouseEnter={() => {const {NAME} = geo.properties; setContent(`${NAME}`)}} onMouseLeave={setContent("")}
                                style={{
                                    hover: {fill:"grey"},
                                    outline: 'none'
                                }} />
            ))
        }
                </Geographies>
            </ComposableMap>
        </div>
    </div>
)
    
}

















