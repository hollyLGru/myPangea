import React from 'react'
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";



const Welcome = () => {
    return (
        <div> 
            
            {/* TODO!!!!!
            
            if logged in = false, we need to show the code below.
            if logged in = true, we need to show the HOME.JS screen 
            HOW DO WE DO SUCH A THING?!
            */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '5%'
                }}>
                <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/299795436_447897597085482_5035268886829281652_n.png?_nc_cat=104&ccb=1-7&_nc_sid=aee45a&_nc_ohc=qT7cnXc0Wa4AX8CBmPQ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIKwXp85I3wepGsczy8XZRRjHmCxz-2R1MgPojY9T4bAw&oe=632E9E09" alt="myPangea Logo"
                width="50%" />
           </div>
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