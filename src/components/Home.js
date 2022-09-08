import React, { Component } from 'react';
import axios from 'axios';
import EntryCard from './Entrycard';
import cookie from 'cookie';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid';


const cookies = cookie.parse(document.cookie);
const userID = parseInt(cookies.userID);

class Home extends Component {


    constructor(){
        super()
        this.state = {
          arrayOfEntries: [],
        }
      };



      componentDidMount(){
        axios.get(`http://localhost:8000/myPANGEA/userentries/${userID}`)
        .then (res => {
          const arrayOfEntries = res.data;
          this.setState({ arrayOfEntries })
        })
        };



    render() {
        return (

            <Container>
              <h2>Entries</h2>
              <Grid container spacing={8}  style={{margin: "auto"}}>
                {this.state.arrayOfEntries.map((entry, index) => {
                return (
                  <EntryCard item xs={4} key={index} id={entry.id} date={entry.date} city={entry.city} country={entry.country} photo={entry.photo} diary={entry.diary} UserID={entry.UserID} continent={entry.continent} />
                  )
                })}
              </Grid>
            </Container>




        );
        }
      }

export default Home


