import { useAuth0 } from '@auth0/auth0-react'
import { Button, Stack } from '@mui/material';
import React from 'react'

const LogoutButton = () => {
    const {logout,isAuthenticated}=useAuth0();
  return (
    isAuthenticated&&(
    <Stack>
    <Button onClick={()=>logout()} sx={{width:"100px",height:"100px",display:"flex",flex:1}}>
        logout
    </Button>
    </Stack>
    )
    )
}

export default LogoutButton