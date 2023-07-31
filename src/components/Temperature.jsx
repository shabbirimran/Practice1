import { Box, Button, Card, Typography, styled } from '@mui/material'
import React, { useState } from 'react'

const Temperature = () => {
  const [num,setNum]=useState(0);
  const [tempcolor,setTempcolor]=useState("cold")
  const Buttons=styled(Button)({
    bordeRadius: "100px",
    border:" 2px #ffffff solid",
   
    


  })
  const AddHandle=()=>{
    setNum(num+1);
    if(num=>28){
      let red="red"
      setTempcolor(red)
    }
  }
    const SubHandle=()=>{
      setNum(num>0?num-1:num);
      if(num<30){
      let blue="blue";
      setTempcolor(blue)
      }
  }
  return (
    <Box display="flex"  justifyContent="center" >
        <Card sx={{backgroundColor:"#2b5870", display:"flex", width:"500px",height:"600px",flexDirection:"column",borderRadius:"20px", boxShadow:"10px 10px 38px 0px rgba(0, 0, 0, 0.75);"}} >
   <Box display="flex" justifyContent="flex-start" alignContent="center" margin="auto" mt={2} >
   <Box sx={{display:"flex",borderRadius:"50%",color: "#ffffff",height: "220px",width: "220px;", border: "3px #ffffff solid",alignItems:"center",justifyContent:"center",background:tempcolor}}>
    <Typography display="flex" sx={{fontSize: "48px"}}>
        {num}
    </Typography>
    
   </Box>
  
   </Box>
   <Box display="flex" margin="auto">
    <Buttons onClick={AddHandle}>Click me</Buttons>
    
    <Buttons onClick={SubHandle}>Click me</Buttons>
   </Box>

 
        </Card>
    </Box>
  )
}

export default Temperature