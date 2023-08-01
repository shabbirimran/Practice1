import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Rectangle21 from '../images/Rectangle 21.png'
const Section = () => {
  return (
    <Stack direction="column" mt={25}>
    <Box sx={{justifyContent:"center",alignItems:"center"}}>
    <Typography
    sx={{ textAlign:"center",
        color: "#13131C",
fontFamily: "Oswald",
fontSize: "32px",
fontStyle: "normal",
fontWeight: "700",
lineHeight: "130.5%",
textTransform: "uppercase"}}
    
    >Why Leading Schools <br/> work with us for years</Typography>
    </Box>
    <Box sx={{borderRadius:"501px"}}>
    <Typography sx={{color:"red",opacity:"10%"}}>
    Original Style
    <img src={Rectangle21}/>
    </Typography>
    </Box>
    </Stack>
  )
}

export default Section