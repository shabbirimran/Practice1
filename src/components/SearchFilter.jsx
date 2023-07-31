import React, { useState } from 'react'
import { Searchdata } from './Searchdata'
import { Box, Card, IconButton, Input, Paper } from '@mui/material'
import { Search } from '@mui/icons-material'
import '../index.css'
const SearchFilter = () => {
  const [searchdata,setSearchdata]=useState("");
  return (
    <Box>
   <Paper display="flex" component="form" 
   sx={{borderRadius:20, border:'2px solid #e3e3e3',boxShadow:'none',width:"350px",display:"flex",margin:"auto",padding:"20px"}}>
    <input  className='search-bar' placeholder='...search'  value={searchdata} onChange={(event)=>setSearchdata(event.target.value)}
     />
  <IconButton><Search/></IconButton>
   </Paper>
    <Card sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"50px",margin:"auto",fontSize:"25px"}}>
    {
        Searchdata.filter((val)=>{
          if(searchdata===""){
            return val
          }else if(val.first_name.toLowerCase().includes(searchdata.toLowerCase())){
            return val
          }
        }).map((val,key)=>{
            return(<div>
                {val.first_name}

            </div>)

        })
        
    }
    </Card>
    </Box>
  )
}

export default SearchFilter