import { Box, Button, Icon, IconButton, Typography, styled } from '@mui/material'
import React from 'react'
import banner1 from '../images/banner1.png'
import banners2 from "../images/banner2.png"
import banner3 from '../images/bg1.png'
import Arrow from '../images/Arrow.svg'
import Rectangle5 from '../images/Rectangle5.svg'


const Banner = () => {
    const BannerContainer=styled(Box)(({theme})=>({
        display: "flex",
        justifyContent: "flex-end",
        width: "100%",
        height: "100%",
        

        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            alignItems: "center",
        },
    
    }));
    const  BannerImage = styled("img")(({ src, theme }) => ({
        src: `url(${src})`,
        // backgroundImage: `url(${src})`,
        // backgroundRepeat: "no-repeat",
        // backgroundPosition: "center",
        width: "900px",
        height:"800",
        marginTop:"-80px",
        
        flex:0,
        [theme.breakpoints.down("md")]: {
          width: "350px",
        },
        [theme.breakpoints.down("sm")]: {
          width: "320px",
          height: "300px",
        },
      }));
      const  Banner2 = styled("img")(({ src, theme }) => ({
        src: `url(${src})`,
        // backgroundImage: `url(${src})`,
        // backgroundRepeat: "no-repeat",
        // backgroundPosition: "center",
        width: "700px",
        height:"500",
        marginRight:"-680px",
        marginTop:"-80px",
        zIndex:"0",
        
                [theme.breakpoints.down("md")]: {
          width: "350px",
        },
        [theme.breakpoints.down("sm")]: {
          width: "320px",
          height: "300px",
        },
      }));
     
      const BannerContent=styled(Box)(()=>({
      display: "flex",
    
      flexDirection: "column",
      padding: "30px",
      marginTop:"150px"
        

      }));
      const  BannerReactangle = styled("img")(({ src, theme }) => ({
        src: `url(${src})`,
        // backgroundImage: `url(${src})`,
        // backgroundRepeat: "no-repeat",
        // backgroundPosition: "center",
        width: "50px",
        height:"48px",

        marginLeft:"150px",
        position:"absolute",
       
      }));
      const  BannerArrow = styled("img")(({ src, theme }) => ({
        src: `url(${src})`,
        // backgroundImage: `url(${src})`,
        // backgroundRepeat: "no-repeat",
        // backgroundPosition: "center",
        width: "30px",
        height:"25px",
        marginRight:"-150px",
        zIndex:"0",
      }));
     

        return (
   <Box>
    <BannerContainer>
   
   
    <BannerContent>
    <Typography sx={{
      color: "#FFF",
fontFamily: "Oswald",
fontSize: "50px",
fontStyle: "normal",
fontWeight: "700",
lineHeight: "80px",
width:"600px",
alignItems:"center",


    }}>
    <Box sx={{width:"1600px",height:"500px",display:"flex",flexDirection:"row",position:"fixed",marginTop:"-100px",color:"black"}}>
      <img src={banner3}/>
    </Box>
   Scaling Online Schools & Internet Services with Help

    </Typography>
    <Typography sx={{
    color: "#59E185",
    fontFamily: "Roboto",
fontSize: "40px",
fontStyle: "normal",
fontWeight: "700",
lineHeight: "50px", /* 125% */


    }}>

    Follow Us: Facebook / Instagram
    </Typography>
    <Box sx={{
width: "200px",
height:"50px",
border:"2px solid white"
}}>
<Button sx={{display:'flex',backgroundColor:"#59E185",color:"white",width:"200px",height:"50px",}}>
  <Typography sx={{display:"flex",position:"absolute",marginRight:"30px"}}>
  Apply now
  </Typography>
  <IconButton sx={{flexDirection:"row"}}>
<BannerReactangle src={Rectangle5}/>
<BannerArrow src={Arrow}/>
</IconButton>


</Button>
    </Box>
    </BannerContent>
        <Banner2 src={banners2}/>
        <BannerImage src={banner1}/>
        
        </BannerContainer>
   </Box>
  )
}

export default Banner