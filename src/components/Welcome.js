import React from 'react'
import Button from '@mui/material/Button';
import { Link, useNavigate } from "react-router-dom";

const Welcome = () => {
    return (
        <div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                }}>
                <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/300620794_1198227474360541_6083866468668166618_n.png?_nc_cat=111&ccb=1-7&_nc_sid=aee45a&_nc_ohc=nyySKeubrsgAX-1w2ZD&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIgoMGTYCZOMLnBnW9GshSy-3sD_NOUjWIl3PTtXYHbGg&oe=633059ED" width="70%"  />
           </div>
           <br/>
           <div class="buttonContainer"
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                }} >
                    <Button variant="contained" sx={{margin: '5%', width: '15%'}} >
                        <Link to="./Register">
                            Register
                        </Link>
                     </Button>
                    <Button variant="contained" sx={{margin: '5%', width: '15%'}} >
                        <Link to="./Login">
                             Login
                        </Link>
                    </Button>
            </div>
        </div>
    )
}

export default Welcome