import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'



function EntryCard(props) {
    let date = new Date(props.date);
    let entryDate = date.toDateString();

    return(

                <Card sx={{ width: '22%',   margin: "1.5%"}}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={props.photo}
                        alt="trip photo"
                    />
                    <CardContent>

                        <Typography gutterBottom variant="h5" component="div">
                        {entryDate}
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                        {props.city}, {props.country}
                        <br></br>
                        {props.continent}
                        </Typography>

                    </CardContent>
                    
                    <CardActions>
                                <Button size="small"><Link to={`/PangeaEntry/${props.id}`}> Entry</Link></Button>
                    </CardActions> 
                    </Card>

            
    
    )
    
};

export default EntryCard; 