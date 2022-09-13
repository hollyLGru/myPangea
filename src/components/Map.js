import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {ComposableMap, Geographies, Geography} from 'react-simple-maps';

export default function Map() {
    const geoUrl =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/world-continents.json";



    return (
            <div className="Map" style={{width: "80%", margin: 'auto', display: "flex", flexDirection: "column", justifyConent: "center", alignItems: "center"}}>
                    <div style={{width:"50%"}}>
                            <ComposableMap data-tip="">
                                <Geographies geography={geoUrl}>
                                    {({ geographies }) =>
                                            geographies.map((geo) => (
                                                <Geography key={geo.rsmKey} geography={geo} onClick={this.handleChange.bind(this)}
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

