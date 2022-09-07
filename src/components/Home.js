import React, { useState } from 'react';
// import { Link } from 'react-router-dom'
// import { Card, CardContent, CardActions, Divider } from '@mui/material'


const Home = () => {

    const [ updateEntries] = useState([])

    fetch('http://localhost:8000/myPANGEA/userentries/:id')
    .then((response) => response.json())
      .then((data) => {updateEntries(data.results)})
// documents.cookies.userID needs to match :id 

    return (
        <div className="card-container">
            {/* {cars.map((car, idx) => (
                <Card key={idx} className="card">
                    <CardContent className="text-gray">
                        <span>{car.Name.toUpperCase()}</span>
                        <ul>
                        <li>Miles_per_Gallon: {car["Miles_per_Gallon"]}</li>
                        <li>Cylinders: {car["Cylinders"]}</li>
                        <li>Displacement: {car["Displacement"]}</li>
                        <li>Horsepower: {car["Horsepower"]}</li>
                        </ul>
                    </CardContent>
                    <Divider />
                    <CardActions style={{ color: 'mediumblue' }}>
                        <Link to={`/car/${car.id}`}>See More Details</Link>
                    </CardActions>
                </Card>
            ))} */}
        </div>
    )
}

export default Home