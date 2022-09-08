import React, { useState} from 'react';


function EntryCard(props) {
        
    return(
    <li>
        <img src={props.photo} alt=""></img>
        <h3> 
        {props.date} 
            <span> {props.city}</span> 
        </h3>
        <h4>{props.country}</h4>
        <p>
            <span>{props.continent}</span>
        </p>
        <br></br>

    </li>
    )
    
};

export default EntryCard; 