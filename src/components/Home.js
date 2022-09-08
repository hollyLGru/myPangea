import React, { Component } from 'react';
import axios from 'axios';
import EntryCard from './Entrycard'

class Home extends Component {
    constructor(){
        super()

        this.state = {
          arrayOfEntries: [],
        }
      };


      componentDidMount(){
        axios.get('http://localhost:8000/myPANGEA/userentries/35')
        // documents.cookies.userID needs to match :id 
        .then (res => {
          const arrayOfEntries = res.data;
          this.setState({ arrayOfEntries })
        })
        };



    render() {
        return (
          <div className="App">
            <header className="App-header">
            <ol>{this.state.arrayOfEntries.map((entry, index) => {
              return (
                <EntryCard key={index} id={entry.id} date={entry.date} city={entry.city} country={entry.country} photo={entry.photo} diary={entry.diary} UserID={entry.UserID} continent={entry.continent} />

              )
            })}</ol>
            </header>
          </div>
        );
        }
      }

export default Home


