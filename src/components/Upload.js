import React, { useState } from "react";
import { TextField, Button, Container } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';
import './Upload.css';
import cookie from 'cookie'
console.log(cookie.parse(document.cookie))

const Upload = () => {

  const [state, setState] = useState({
    date: "",
    city: "",
    country: "",
    photo: "",
    diary: ""
  });

  const cookies = cookie.parse(document.cookie);


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
    console.log(state)
    console.log(cookies)
  axios.post('http://localhost:8000/myPANGEA', {
    date: state.date,
    city: state.city,
    country: state.country,
    photo: state.photo,
    diary: state.diary,
    continent:state.continent,
    userID:parseInt(cookies.userID)
  }, {
    headers: {
      Authorization: cookies.jwt
    }
  })
  .then(response=>{
    console.log(response);
  })
  .catch(function (error) {
    console.log(error)
  })
  }

  return (
    <div>
      <h3>Add New Entry</h3>
      <Container maxWidth="sm">
        <form onSubmit={(e) => {handleSubmit(e)}}>
            <TextField
            sx={{ minWidth: 100, margin: '2%' }}
              required
              onChange={handleTextChange}
              value={state.date}
              name="date"
              label="YYYY-MM-DD"
              type="text"
              id="standard-basic" 
              variant="standard"
            />
          <br/>
          <TextField
          sx={{ minWidth: 100 , margin: '2%'}}
            required
            onChange={handleTextChange}
            value={state.city}
            name="city"
            label="City"
            type="text"
            id="standard-basic" 
            variant="standard"
          />
          <br/>
        <TextField
        sx={{ minWidth: 100, margin: '2%' }}
            required
            onChange={handleTextChange}
            value={state.country}
            name="country"
            label="Country"
            type="text"
            id="standard-basic" 
            variant="standard"
          />
          <br/>
        <FormControl sx={{width: '60%' }}>
            <InputLabel id="demo-simple-select-label">Continent</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="continent"
            name="continent"
            value={state.continent}
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
        <br/>
        <TextField sx={{ minWidth: 100, margin: '2%' }}
            required
            onChange={handleTextChange}
            value={state.photo}
            name="photo"
            label="Photo Url"
            type="text"
          />
          
          <br/>

        {/* <TextField
          sx={{ minWidth: 100 , margin: '2%'}}
          required
          onChange={handleTextChange}
          value={state.diary}
          type="text"
          className="diary"
          id="filled-multiline-static"
          label="Write Journal Entry Here"
          multiline
          rows={7}
          defaultValue="Default Value"
          variant="filled"
        /> */}

        <textarea name="diary" rows="12" cols="80" onChange={handleTextChange} value={state.diary}>
        Write Journal Entry Here
        </textarea>


        <br/>
        <Button sx={{ minWidth: 100 , margin: '2%' , backgroundColor: "#FF5C5C"}}
            type="submit"
            className="diary-button"
            variant="contained"
            color="primary"
          >
            Submit Entry
        </Button>
        </form>
      </Container>
    </div>
  );
};

export default Upload;
