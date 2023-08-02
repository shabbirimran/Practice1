import { Box, Stack, Typography, styled } from '@mui/material'
import React from 'react'
import Rectangle21 from '../images/Rectangle21.jpg'
import Rectangle22 from '../images/Rectangle22.png'
import '../App.css'
import { Padding } from '@mui/icons-material'
import frame from '../images/Frame.png'
const Section = () => {
  const  SectionImage = styled("img")(({ src, theme }) => ({
    src: `url(${src})`,
    // backgroundImage: `url(${src})`,
    // backgroundRepeat: "no-repeat",
    // backgroundPosition: "center",
    width: "200px",
    height:"150",
    

  
    
    
    [theme.breakpoints.down("md")]: {
      width: "350px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "320px",
      height: "300px",
    },
  }));


  return (
    <Stack direction="column" mt={25}>
    <Box sx={{justifyContent:"center",alignItems:"center"}}>
    <Typography
    sx={{ textAlign:"center",
        color: "#13131C",
fontFamily: "Oswald",
fontSize: "32px",
fontStyle: "normal",
fontWeight: "600",
lineHeight: "130.5%",
textTransform: "uppercase"}}
    
    >Why Leading Schools <br/> <b>work with us for years</b></Typography>
    </Box>
    <Box sx={{display:"flex",justifyContent:"flex-start"}}>
    <Box flex={1} sx={{justifyContent:"center",display:"flex",marginLeft:"300px",marginTop:"50px"}}>
    
   <SectionImage src={Rectangle21}/>
    </Box>
    <Box flex={2}sx={{flexDirection:"column",display:"flex",marginTop:"50px"}}>
   <Typography sx={{
 color: "#13131C",
fontFamily: "Oswald",
fontSize: "22px",
fontStyle: "normal",
fontWeight: "700",


   }}>
    A different approach to advertising texts
   </Typography>

  
<Typography >
<br/>
We know how to create advertising in an indirect style -stories,<br/>
myth busting, etc. Thereby get more clicks by making ads <br/>
cheaper and scalable.
<br/>
<br/>
It also helps to avoid audience burnout and save results on big budgets.
</Typography>
    </Box>
    
 



    </Box>

    <Box sx={{display:"flex",justifyContent:"center",flexDirection:"row"}}>
    <Box flex={2} sx={{justifyContent:"center",display:"flex",marginLeft:"380px",marginTop:"10px"}}>
   <Typography sx={{
 color: "#13131C",
fontFamily: "Oswald",
fontSize: "22px",
fontStyle: "normal",



   }}>
   <b>Focus on growth, not maintenance</b>
  <br/>

We have abandoned the “conveyor” format in favor of a <br/>
 small number of carefully selected projects that we <br/>
  manage with high quality, involvement and longevity.

</Typography>
    </Box>
    <Box flex={2}>
   <SectionImage src={Rectangle22}/>
    </Box>

    </Box>
  
    </Stack>
  )
}

export default Section