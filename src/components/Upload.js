import React, { useState } from "react";
import { TextField, Button, Container } from "@mui/material";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';


const Upload = () => {

  const [state, setState] = useState({
    date: "",
    city: "",
    country: "",
    photo: "",
    diary: ""

  });


  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  axios.post('http://hollygrudovichfirstapp.herokuapp.com/myPANGEA', {
    date: state.date,
    city: state.city,
    country: state.country,
    photo: state.photo,
    diary: state.diary,
    continent : state.continent 
  })
  .then(response=>{
    console.log(response);
  })
  .catch(function (error) {
    console.log(error)
  })
  }

  return (
    <div className="App">
      <Container maxWidth="sm">
        <form onSubmit={(e) => {handleSubmit(e)}}>
          <TextField
            required
            onChange={handleTextChange}
            value={state.date}
            name="date"
            label="YYYY-MM-DD"
            type="text"
          />
          <TextField
            required
            onChange={handleTextChange}
            value={state.city}
            name="city"
            label="City"
            type="text"
          />
        <TextField
            required
            onChange={handleTextChange}
            value={state.country}
            name="country"
            label="Country"
            type="text"
          />
        <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Country</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="country"
            value={state.country}
            label="Continent"
            onChange={handleTextChange}
            >
            <MenuItem value="Asia">Asia</MenuItem>
            <MenuItem value="NorthAmerica">North America</MenuItem>
            <MenuItem value="SouthAmerica">South America</MenuItem>
            <MenuItem value="Oceania">Oceania</MenuItem>
            <MenuItem value="Europe">Europe</MenuItem>
            <MenuItem value="Africa">Africa</MenuItem>
            <MenuItem value="Antarctica">Antarctica</MenuItem>

            </Select>
        </FormControl>
        </Box>




        <TextField
            required
            onChange={handleTextChange}
            value={state.photo}
            name="photo"
            label="Photo Url"
            type="text"
          />
        <TextField
            required
            onChange={handleTextChange}
            value={state.diary}
            name="diary"
            label="Diary Entry Here"
            type="text"
          />

          <Button
            type="submit"
            className="diary-button"
            variant="contained"
            color="primary"
          >
            Submit Diary Entry
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Upload;
