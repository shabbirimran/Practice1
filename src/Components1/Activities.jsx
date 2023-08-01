import styled from '@emotion/styled'
import { Box, IconButton, ListItem, Paper, Typography } from '@mui/material'
import React from 'react'
import profile1 from '../images/project1.png'
import logo2 from '../images/logo 2.png'
import unknown1 from '../images/Unknown 1.png'
import logo3 from '../images/logo3.png'
import logo4 from '../images/logo4.png'
import logo5 from '../images/logo5.png'
import logo6 from '../images/logo6.png'
import trophy from '../images/trophy1.png'
import Section from './Section'

const Activities = () => {
//   const Profile=styled("img")(({src,theme})=>({
//     src: `url(${src})`,
//     display:"flex",
//     width:"250px",
//     zindex:"0",
//     //  marginRight:{md:"80px",xs:"-3px"},   
//     marginTop:{md:"27px",xs:"5px"},
      
//     [theme.breakpoints.up("md")]: {
     
//     },
//     [theme.breakpoints.up("sm")]: {
//       width: "30px",
//       height: "30px",
//     },
    
// }))

const  Profile = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  // backgroundImage: `url(${src})`,
  // backgroundRepeat: "no-repeat",
  // backgroundPosition: "center",
  // width: "900px",
  // height:"800",
  marginTop:"-80px",
  display:"flex",
  width:{md:"250px"},
  height:{md:"20px"},
  zindex:"0",
  
  [theme.breakpoints.down("md")]: {
    width: "30px",
    height:"50px"
  },
  [theme.breakpoints.down("sm")]: {
    width: "320px",
    height: "300px",
  },
}));
  return (
    <Box>
    <Box sx={{display:"flex",justifyContent:"center"}}>
        <Typography sx={{
            color: "#13131C",
            textAlign: "center",
            fontFamily: "Oswald",
        fontSize: "61px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "130.5%", /* 79.605px */
        textTransform: "uppercase"
  
  
  
        }}>
        Some of <b>active projects</b>
        </Typography>
    </Box>
    <Box  sx={{display:{md:"flex",sm:"flex"},flexDirection:{md:"row",sm:"row"},justifyContent:{md:"space-between",sm:"space-between"},margin:{md:"50px 350px"},width:{sm:"200vw",md:"70vw",lg:"40vw"}}}>
    <Box sx={{display:"flex"}}>
    
       
        <Paper sx={{backgroundColor:"#00CB6F",borderRadius:"140px 140px 0px 0px",width:{md:"190px",sm:"195px"},height:{md:"170px",sm:"152px"},display:"flex",padding:"25px",alignItems:"center"}}>
          <Box sx={{

            display:"flex",
            marginTop:{md:"25px"},
            width:{md:"130px",sm:"130px"},
            height:{md:"130px",height:"125px"},
            zindex:"0",
            
        }}>
        <img src={profile1}/> 
        </Box>
        <Box sx={{display:"flex",padding:"90px",
        borderRadius: "5px",
            background: "#FFF",
        boxShadow: "0px 8px 12px 0px rgba(0, 0, 0, 0.2)",
        
        width:{md:"90px",sm:"90px"},
  height: {md:"35px",sm:"35px"},
  marginLeft:{md:"-110px",sm:"-110px"},
  marginTop:{md:"300px",sm:"300px"},
  
  
  flexDirection:"row"
  
  
        
        }}>
            <Box sx={{margin:{md:"-80px -80px",sm:"-80px -80px"},display:"flex",width:{md:"40px",sm:"40px"},height:{md:"40px",sm:"40px"}}}>
            <img src={logo2}/>
            <Typography sx={{display:"flex",justifyContent:"center",flex:"1",
            color: "#13131C",
  fontFamily: "Oswald",
  fontSize: "15px",
  fontStyle: "normal",
  fontWeight: "600",
  marginLeft:{md:"12px",sm:"12px"},
  marginTop:{md:"-5px",sm:"-5px"}
  
            
            }}>
            Ivan Zimbitsky
              </Typography>
             
              </Box>
              <Box sx={{display:"flex",flex:1,flexDirection:"row",justifyContent:"center",}}>
              <Typography sx={{
                width:{md:"200px",sm:"200px"},
                color: "#181820",
                fontFamily: "Roboto",
                marginLeft:"33px",
                marginTop:"-15px",
                fontSize: "12px",
                fontStyle: "italic",
                fontWeight: "500",
                lineHeight: "130.5%", /* 23.49px */
                
              }} >
                Business Education
                <Box sx={{display:"flex",flexDirection:"column",fontSize:"12px"}}>
                                
         <ListItem sx={{display:"list-item",color:"red"}}>
                            <Typography sx={{display:"inline-block",fontSize:"12px"}}>Working: 3 years </Typography>
                            
  
                  </ListItem>
                  
                  <ListItem sx={{display:"list-item",marginTop:{md:"-15px",sm:"-15px"},color:"red"}}>
                            <Typography sx={{display:"inline-block",fontSize:"12px",color:"black"}}>Working: 3 years </Typography>
                            
  
                  </ListItem>
                  <ListItem sx={{display:"list-item",marginTop:{md:"-15px",sm:"-15px"},color:"red"}}>
                            <Typography sx={{display:"inline-block",fontSize:"12px",color:"black"}}>Working: 3 years </Typography>
                            
  
                  </ListItem>
                  <ListItem sx={{display:"list-item",marginTop:{md:"-15px",sm:"-15px"},color:"red"}}>
                            <Typography sx={{display:"inline-block",fontSize:"12px",color:"black"}}>Working: 3 years </Typography>
                            
  
                  </ListItem>
                  
                  </Box>
  
                  
  
              </Typography>
              
            </Box>
              
  
  
                     </Box>
        </Paper>
        
  
    </Box>
    <Box sx={{display:"flex"}}>
    
       
    <Paper sx={{backgroundColor:"#000",borderRadius:"20px",width:{md:"190px",sm:"195px"},height:{md:"170px",sm:"152px"},display:"flex",padding:"25px",alignItems:"center"}}>
      <Box sx={{

        display:"flex",
        marginLeft:{sm:"15px"},
        marginTop:{md:"90px",sm:"80px"},
        width:{md:"250px",sm:"200px"},
        height:{md:"222px",height:"200px"},
        zindex:"0",
        
    }}>
    <img src={unknown1}/> 
    </Box>
    <Box sx={{display:"flex",padding:"90px",
    borderRadius: "5px",
        background: "#FFF",
    boxShadow: "0px 8px 12px 0px rgba(0, 0, 0, 0.2)",
    
    width:{md:"90px",sm:"90px"},
height: {md:"35px",sm:"35px"},
marginLeft:{md:"-150px",sm:"-130px"},
marginTop:{md:"300px",sm:"300px"},


flexDirection:"row"


    
    }}>
        <Box sx={{margin:{md:"-80px -80px",sm:"-80px -80px"},display:"flex",width:{md:"40px",sm:"40px"},height:{md:"25px",sm:"40px"}}}>
        <img src={logo3}/>
        <Typography sx={{display:"flex",justifyContent:"center",flex:"1",
        color: "#13131C",
fontFamily: "Oswald",
fontSize: "15px",
fontStyle: "normal",
fontWeight: "600",
marginLeft:{md:"12px",sm:"10px"},
marginTop:{md:"-5px",sm:"-5px"}

        
        }}>
        Pauline Lebedev

          </Typography>
         
          </Box>
          <Box sx={{display:"flex",flex:1,flexDirection:"row",justifyContent:"center",}}>
          <Typography sx={{
            width:{md:"200px",sm:"200px"},
            color: "#181820",
            fontFamily: "Roboto",
            marginLeft:"33px",
            marginTop:"-15px",
            fontSize: "12px",
            fontStyle: "italic",
            fontWeight: "500",
            lineHeight: "130.5%", /* 23.49px */
            
          }} >
       School of Interior Design
            <Box sx={{display:"flex",flexDirection:"column",fontSize:"12px"}}>
                            
     <ListItem sx={{display:"list-item",color:"red"}}>
                        <Typography sx={{display:"inline-block",fontSize:"12px"}}>Working: 3 years </Typography>
                        

              </ListItem>
              
              <ListItem sx={{display:"list-item",marginTop:{md:"-15px",sm:"-15px"},color:"red"}}>
                        <Typography sx={{display:"inline-block",fontSize:"12px",color:"black"}}>Working: 3 years </Typography>
                        

              </ListItem>
              <ListItem sx={{display:"list-item",marginTop:{md:"-15px",sm:"-15px"},color:"red"}}>
                        <Typography sx={{display:"inline-block",fontSize:"12px",color:"black"}}>Working: 3 years </Typography>
                        

              </ListItem>
             
              
              </Box>
              <Box sx={{margin:{md:"20px 5px",sm:"-80px -80px"},display:"flex",width:{md:"220px",sm:"40px"},height:{md:"20px",sm:"40px"}}}>
        <img src={trophy}/>
        <Typography sx={{display:"flex",justifyContent:"center",flex:"1",
        color: "#13131C",
fontFamily: "Oswald",
fontSize: "12px",
fontStyle: "normal",
fontWeight: "500",
marginLeft:{md:"-40px",sm:"10px"},
marginTop:{md:"-5px",sm:"-5px"}

        
        }}>
Awarded <br/>
 «The Best Business Awards»
</Typography>
          </Box>
              

          </Typography>
          
        </Box>
          


                 </Box>
    </Paper>
    

</Box>
<Box sx={{display:"flex"}}>
    
       
    <Paper sx={{backgroundColor:"#00CB6F",borderRadius:"140px 140px 0px 0px",width:{md:"190px",sm:"195px"},height:{md:"170px",sm:"152px"},display:"flex",padding:"25px",alignItems:"center"}}>
      <Box sx={{

        display:"flex",
        marginTop:{md:"10px"},
        width:{md:"130px",sm:"130px"},
        height:{md:"160px",height:"125px"},
        zindex:"0",
        marginLeft:{md:"5px"},
        
    }}>
    <img src={logo4}/> 
    </Box>
    <Box sx={{display:"flex",padding:"90px",
    borderRadius: "5px",
        background: "#FFF",
    boxShadow: "0px 8px 12px 0px rgba(0, 0, 0, 0.2)",
    
    width:{md:"90px",sm:"90px"},
height: {md:"35px",sm:"35px"},
marginLeft:{md:"-120px",sm:"-110px"},
marginTop:{md:"300px",sm:"300px"},


flexDirection:"row"


    
    }}>
        <Box sx={{margin:{md:"-80px -80px",sm:"-80px -80px"},display:"flex",width:{md:"40px",sm:"40px"},height:{md:"40px",sm:"40px"}}}>
        <img src={logo5}/>
        <Typography sx={{display:"flex",justifyContent:"center",flex:"1",
        color: "#13131C",
fontFamily: "Oswald",
fontSize: "15px",
fontStyle: "normal",
fontWeight: "600",
marginLeft:{md:"12px",sm:"12px"},
marginTop:{md:"-5px",sm:"-5px"}

        
        }}>
        Maria Guryev
          </Typography>
         
          </Box>
          <Box sx={{display:"flex",flex:1,flexDirection:"row",justifyContent:"center",}}>
          <Typography sx={{
            width:{md:"200px",sm:"200px"},
            color: "#181820",
            fontFamily: "Roboto",
            marginLeft:"33px",
            marginTop:"-15px",
            fontSize: "12px",
            fontStyle: "italic",
            fontWeight: "500",
            lineHeight: "130.5%", /* 23.49px */
            
          }} >
            Business Education
            <Box sx={{display:"flex",flexDirection:"column",fontSize:"12px"}}>
                            
     <ListItem sx={{display:"list-item",color:"red"}}>
                        <Typography sx={{display:"inline-block",fontSize:"12px"}}>Working: 3 years </Typography>
                        

              </ListItem>
              
              <ListItem sx={{display:"list-item",marginTop:{md:"-15px",sm:"-15px"},color:"red"}}>
                        <Typography sx={{display:"inline-block",fontSize:"12px",color:"black"}}>Working: 3 years </Typography>
                        

              </ListItem>
              <ListItem sx={{display:"list-item",marginTop:{md:"-15px",sm:"-15px"},color:"red"}}>
                        <Typography sx={{display:"inline-block",fontSize:"12px",color:"black"}}>Working: 3 years </Typography>
                        

              </ListItem>
          
              
              </Box>
              <Box sx={{margin:{md:"20px 5px",sm:"-80px -80px"},display:"flex",width:{md:"220px",sm:"40px"},height:{md:"20px",sm:"40px"}}}>
        <img src={trophy}/>
        <Typography sx={{display:"flex",justifyContent:"center",flex:"1",
        color: "#13131C",
fontFamily: "Oswald",
fontSize: "12px",
fontStyle: "normal",
fontWeight: "500",
marginLeft:{md:"-40px",sm:"10px"},
marginTop:{md:"-5px",sm:"-5px"}

        
        }}>
Awarded <br/>
 «The Best Business Awards»
</Typography>
          </Box>
              

          </Typography>
          
        </Box>
          


                 </Box>
    </Paper>
    

</Box>
<Box sx={{display:"flex"}}>
    
       
    <Paper sx={{backgroundColor:"#000",borderRadius:"20px",width:{md:"190px",sm:"195px"},height:{md:"170px",sm:"152px"},display:"flex",padding:"25px",alignItems:"center"}}>
      <Box sx={{

        display:"flex",
        marginLeft:{sm:"1px"},
        marginTop:{md:"5px",sm:"80px"},
        width:{md:"250px",sm:"200px"},
        height:{md:"180px",height:"200px"},
        zindex:"0",
        
    }}>
    <img src={logo6}/> 
    </Box>
    <Box sx={{display:"flex",padding:"90px",
    borderRadius: "5px",
        background: "#FFF",
    boxShadow: "0px 8px 12px 0px rgba(0, 0, 0, 0.2)",
    
    width:{md:"90px",sm:"90px"},
height: {md:"35px",sm:"35px"},
marginLeft:{md:"-200px",sm:"-130px"},
marginTop:{md:"300px",sm:"300px"},


flexDirection:"row"


    
    }}>
        <Box sx={{margin:{md:"-80px -80px",sm:"-80px -80px"},display:"flex",width:{md:"40px",sm:"40px"},height:{md:"25px",sm:"40px"}}}>
        <img src={logo6}/>
        <Typography sx={{display:"flex",justifyContent:"center",flex:"1",
        color: "#13131C",
fontFamily: "Oswald",
fontSize: "15px",
fontStyle: "normal",
fontWeight: "600",
marginLeft:{md:"12px",sm:"10px"},
marginTop:{md:"-5px",sm:"-5px"}

        
        }}>
        Pauline Lebedev

          </Typography>
         
          </Box>
          <Box sx={{display:"flex",flex:1,flexDirection:"row",justifyContent:"center",}}>
          <Typography sx={{
            width:{md:"200px",sm:"200px"},
            color: "#181820",
            fontFamily: "Roboto",
            marginLeft:"33px",
            marginTop:"-15px",
            fontSize: "12px",
            fontStyle: "italic",
            fontWeight: "500",
            lineHeight: "130.5%", /* 23.49px */
            
          }} >
       School of Interior Design
            <Box sx={{display:"flex",flexDirection:"column",fontSize:"12px"}}>
                            
     <ListItem sx={{display:"list-item",color:"red"}}>
                        <Typography sx={{display:"inline-block",fontSize:"12px"}}>Working: 3 years </Typography>
                        

              </ListItem>
              
              <ListItem sx={{display:"list-item",marginTop:{md:"-15px",sm:"-15px"},color:"red"}}>
                        <Typography sx={{display:"inline-block",fontSize:"12px",color:"black"}}>Working: 3 years </Typography>
                        

              </ListItem>
              <ListItem sx={{display:"list-item",marginTop:{md:"-15px",sm:"-15px"},color:"red"}}>
                        <Typography sx={{display:"inline-block",fontSize:"12px",color:"black"}}>Working: 3 years </Typography>
                        

              </ListItem>
              <ListItem sx={{display:"list-item",marginTop:{md:"-15px",sm:"-15px"},color:"red"}}>
                        <Typography sx={{display:"inline-block",fontSize:"12px",color:"black"}}>Working: 3 years </Typography>
                        

              </ListItem>
              
              </Box>

              

          </Typography>
          
        </Box>
          


                 </Box>


                 
    </Paper>
    

</Box>

   
    </Box>

    </Box>
  )
  }

export default Activities