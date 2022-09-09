
import  {React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import cookie from 'cookie';

const cookies = cookie.parse(document.cookie);
const userID = parseInt(cookies.userID);

const PangeaEntry = (props) => {
    const [entry, setEntry] = useState({

    });
    const entryID = useParams().id;

    useEffect(() => {
        axios.get(`http://localhost:8000/myPANGEA/${entryID}`)
        .then (res => {
            setEntry(res.data)
            console.log(res)
        })
      }, [entryID]);

      let date = new Date(entry.date);
      let entryDate = date.toDateString();
    
    return (

        <div class="square" style={{margin: "8%"}} >
            <div>
            <img src={entry.photo} alt="Travel" style={{float: "left", marginRight: "3%", height: "300pt", borderRadius: "15px"}}/>
            </div>
            <h6 style={{margin: "3%" , color: "#FF5C5C ", fontSize:"120%"}}>{entry.city}, {entry.country}</h6> 
            <h6 style={{marginLeft: "3%", marginTop: "-1%",fontStyle: 'italic', color: "grey"}}>{entryDate}</h6>
            <p style={{textAlign: "justify"}}>{entry.diary}</p>
        </div>
    )
}

export default PangeaEntry

