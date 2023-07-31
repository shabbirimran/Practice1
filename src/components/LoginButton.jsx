import React from 'react'

import { Button, Stack } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
const LoginButton = () => {

    const {loginWithRedirect,isAuthenticated}=useAuth0();
    console.log(loginWithRedirect)
  
  return (
    !isAuthenticated&&(
    <Stack>
        <Button onClick={()=>loginWithRedirect()} sx={{width:"100px",height:"100px",display:"flex",flex:1}}>
            login
        </Button>
    </Stack>
    )
    )

}

export default LoginButton