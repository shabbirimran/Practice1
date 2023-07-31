import { Add, Search } from '@mui/icons-material'
import { Box, IconButton, InputBase, MenuItem, Paper, Select, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import '../../index.css'
const TodoForm = () => {
 // const color="backgroundImage:"linear-gradient(120deg, #f6d365 0%, #fda085 100%)"
 return (
 <Stack sx={{backgroundImage:"linear-gradient(120deg, #f6d365 0%, #fda085 100%)",minHeight:"100vh",display:"flex"}}>
<Box sx={{display:"flex",justifyContent:"center",alignContent:"center",marginTop:"250px"}}>
  <Typography variant='h5' sx={{margin:{sm:"25px auto",md:"25px auto",xs:"25px auto",sm:"25px auto"}}}>
            Enter Todo Form
        </Typography>
        </Box>
        <Paper component="form" onSubmit={()=>{}} 
        sx={{display:"flex",width:{md:"400px",xs:"200px",sm:"400px"},border:"2px solid red",height:"40px",margin:{md:"25px auto",xs:"25px auto",sm:"25px auto"},backgroundColor:{sm:"yellow"}}}>
        <input style={{fontSize:"25px",width:"100px",alignItems:"center",textAlign:"left",display:"flex"}} className='search-bar' placeholder='....search'
        value="" onChange={()=>{}}
      />
      <IconButton type='submit' sx={{display:"flex",marginLeft:{md:"240px",sm:"240px",xs:"50px"},color:"red",justifyContent:"center"}}><Add/></IconButton>
      <Box sx={{width:"122px"}}>
      <Select sx={{backgroundColor:"white",width:{md:"150px",sm:"100px",xs:"50px"},height:"40px",margin:{md:"0.5px 25px",sm:"0.5px 25px",xs:"0px 20px"},padding:"19px",border:"2px solid red"}}
      value="" onChange={()=>{}}
      >
      <MenuItem >1</MenuItem>
      <MenuItem>1</MenuItem>
      </Select>
      </Box>
      </Paper>
      </Stack>
  )
}

export default TodoForm