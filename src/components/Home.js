import React, { Component } from 'react';
import axios from 'axios';
import EntryCard from './Entrycard';
import cookie from 'cookie';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {ComposableMap, Geographies, Geography} from 'react-simple-maps';



const cookies = cookie.parse(document.cookie);
const userID = parseInt(cookies.userID);
const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-continents.json";



class Home extends Component {
    constructor(){
        super()
        this.state = {
          arrayOfEntries: [],
          filterSelect: false,
          continentEntries: []
        }
      };


      componentDidMount(){
        axios.get(`http://localhost:8000/myPANGEA/userentries/${userID}`)
        .then (res => {
          const arrayOfEntries = res.data;
          this.setState({ arrayOfEntries })
        })
        };

        handleChange(e) {
          console.log("continent selected", e);
          const contEntries = this.state.arrayOfEntries.filter(function(entry) {
            return entry.continent === e.target.value
          })
          this.setState({ filterSelect: true, continentEntries : contEntries});
        }


    render() {
        return (
            <Container>
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

            <br></br> {
              !this.state.filterSelect ? <Grid container spacing={8}  style={{margin: "auto"}}>
              {this.state.arrayOfEntries.map((entry, index) => {
              return (
                <EntryCard item xs={4} key={index} id={entry.id} date={entry.date} city={entry.city} country={entry.country} photo={entry.photo} diary={entry.diary} UserID={entry.UserID} continent={entry.continent} />
                )
              })}
            </Grid> 
            
              :


            <Grid container spacing={8}  style={{margin: "auto"}}>
            {this.state.continentEntries.map((entry, index) => {
            return (
              <EntryCard item xs={4} key={index} id={entry.id} date={entry.date} city={entry.city} country={entry.country} photo={entry.photo} diary={entry.diary} UserID={entry.UserID} continent={entry.continent} />
              )
            })}
          </Grid>

            }
            </Container>




        );
        }
      }

export default Home


               {/* <FormControl sx={{width: '60%' }}>
              <InputLabel id="demo-simple-select-label">Continent</InputLabel>
              <Select
              labelId="demo-simple-select-label"
              id="continent"
              name="continent"
              value={this.state.continentEntries}
              label="Continent"
              onChange={this.handleChange.bind(this)}
              >
                <MenuItem value="Asia">Asia</MenuItem>
                <MenuItem value="NorthAmerica">North America</MenuItem>
                <MenuItem value="SouthAmerica">South America</MenuItem>
                <MenuItem value="Oceania">Oceania</MenuItem>
                <MenuItem value="Europe">Europe</MenuItem>
                <MenuItem value="Africa">Africa</MenuItem>
                <MenuItem value="Antarctica">Antarctica</MenuItem>

                </Select>
            </FormControl>  */}