
import  {React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
import { useNavigate }  from "react-router-dom";


const PangeaEntry = (props) => {
    const [entry, setEntry] = useState({

    });
    const entryID = useParams().id;
    let navigate = useNavigate();



    useEffect(() => {
        axios.get(`https://hollygrudovichfirstapp.herokuapp.com/myPANGEA/${entryID}`)
        .then (res => {
            setEntry(res.data)
            console.log(res)
        })
      }, [entryID])

      const handleDelete = (e) => {
        axios.delete(`https://hollygrudovichfirstapp.herokuapp.com/myPANGEA/${entryID}`)
        .then(() => setEntry({ status: 'Delete successful' }));
        navigate("/Home")
    }

    // useEffect(() => {
    //     axios.get(`http://localhost:8000/myPANGEA/${entryID}`)
    //     .then (res => {
    //         setEntry(res.data)
    //         console.log(res)
    //     })
    //   }, [entryID])

    //   const handleDelete = (e) => {
    //     axios.delete(`http://localhost:8000/myPANGEA/${entryID}`)
    //     .then(() => setEntry({ status: 'Delete successful' }));
    //     navigate("/Home")
    // }

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
            <br></br>
            <div style={{margin: "auto", textAlign: "center"}}>
                {/* <EditIcon style={{margin: "1%", color:"grey"}}/> */}
                <DeleteIcon onClick={handleDelete} style={{margin: "1%", color:"grey"}} />
            </div>
        </div>
    )
}

export default PangeaEntry

