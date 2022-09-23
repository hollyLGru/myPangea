import React from 'react'
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import CarouselCard from './Carousel';


const Welcome = () => {
    return (
        <div> 

            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '5%',
                }}>

                <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/306619864_852601049063578_4111733771120542054_n.png?_nc_cat=104&ccb=1-7&_nc_sid=aee45a&_nc_ohc=wpPcftmloqsAX-4dSNh&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJFs9f1YHEKmvfbBNgkeovIBBV2RKv9q9pFmhZarmz_Ow&oe=6352EEC2" alt="myPangea Logo"
                width="45%" />
                <CarouselCard/>
                
           </div>
           {/* <p style={{marginLeft: "10%", marginTop: "-2.5%", fontStyle: "italic"}}>The Travel App That Brings Your World Together</p> */}
           <br/>
           <div className="buttonContainer"
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                }} >
                    <Button variant="contained" sx={{margin: '5%', width: '15%', backgroundColor: "#FF5C5C"}} >
                        <Link to="./Register">
                            Register
                        </Link>
                     </Button>
                    <Button variant="contained" sx={{margin: '5%', width: '15%', backgroundColor: '#5EC7D1'}} >
                        <Link to="./Login">
                             Login
                        </Link>
                    </Button>
            </div>
        </div>
    )
}

export default Welcome