import React, { Component } from 'react';
import axios from 'axios';
import EntryCard from './Entrycard';
import cookie from 'cookie';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid';
import BasicWorldMap from 'react-basic-world-map';

const cookies = cookie.parse(document.cookie);
const userID = parseInt(cookies.userID);

const continents: ContinentItem[] =[
  { key: "Africa", value: "Africa" },
  { key: "SouthAmerica", value: "SouthAmerica" },
  { key: "Europe", value: "Europe" },
  { key: "Asia", value: "Asia" },
  { key: "NorthAmerica", value: "NorthAmerica" },
  { key: "Oceania", value: "Oceania" }
]


class Home extends Component {
    constructor(){
        super()
        this.state = {
          arrayOfEntries: [],
          filterSelect: false,
          continentEntries: []
        }
      };


      // componentDidMount(){
      //   axios.get(`https://hollygrudovichfirstapp.herokuapp.com/myPANGEA/userentries/${userID}`)
      //   .then (res => {
      //     const arrayOfEntries = res.data;
      //     this.setState({ arrayOfEntries })
      //   })
      //   };

        componentDidMount(){
          axios.get(`http://localhost:8000/myPANGEA/userentries/${userID}`)
          .then (res => {
            const arrayOfEntries = res.data;
            this.setState({ arrayOfEntries })
          })
          };

        handleChange(e) {
          console.log("continent selected", e);
          console.log(e.key)
          const contEntries = this.state.arrayOfEntries.filter(function(entry) {
            return entry.continent === e.key
          }) 
          // if(contEntries.length == 0) {
            
          // }
          this.setState({ filterSelect: true, continentEntries : contEntries});
        }


    render() {
        return (
          <Container>
            <h2 style={{fontSize: "150%", marginLeft: "5%"}}>Filter Entries By Continent:</h2>
            <BasicWorldMap
            primaryColor="#699EAA"
            secondaryColor="#FF5C5C"
            onClickMapContinent={this.handleChange.bind(this)}
            continents= {continents}
            name="continent"
            value={this.state.continentEntries}
            style={{
              margin: "auto",
              textAlign: "center",
              display: "block",
              marginTop: "2%"
            }}
            />
            <br></br> 
            {
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
