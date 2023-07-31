import { Box, Button, Checkbox, FormControl, FormControlLabel, FormLabel, Grid, Paper, Radio, RadioGroup, TextField } from '@mui/material'
import React, { useState } from 'react'
import Validation from './Validation';

const Form = () => {
    const [values,setValues]=useState({
        firstname:"",
        lastname:"",
        email:""
    });
    const [errors,setErrors]=useState({});
    const [submitted,setSubmitted]=useState(false);
    const [valid,setValid]=useState(false);
   const formshandle=(e)=>{
 
    const name=e.target.name;
    const value=e.target.value;
    setValues({...values,[name]:value})

   }
   const formsubmit=(e)=>{
    e.preventDefault();
    if(values.firstname===""&&values.email===""&&values.lastname==="" && errors.length>0){
        setSubmitted(false)
        setErrors(Validation (values))
        
     }else{
   
   setSubmitted(true)
    console.log(e.target.value)
    console.log([values])
   }
    // if(values.firstname==="" && values.email==="" && values.lastname==="")
    // {
    //     setValid(false)
    //     setSubmitted(false)
    // }

    // if(values.firstname && values.email && values.lastname ){
    //     setValid(true);
        
    
    // }
    // setSubmitted(true);    
   }
  return (
    <Grid className='' sx={{height:{sm:"98vh"}}}>
        <Paper elevation={20} sx={{padding:"30px",width:"300px",margin:"20px auto"}}>
        <Grid textAlign="center" sx={{height:"500px"}}>
            <h2>Sign Up</h2>
            <form onSubmit={formsubmit}>
            {submitted || !errors ? <Box color="red">Succesfully thankyou for register</Box>:null}
                    <TextField fullWidth label='Name' name="firstname" value={values.firstname} placeholder="Enter your name" sx={{margin:"10px auto"}} onChange={formshandle} />
                    {errors.firstname && <span style={{color:"red"}}>{errors.firstname} </span>}
                    <TextField fullWidth label='Lastname' name="lastname" value={values.lastname} placeholder="Enter your last Name" sx={{margin:"10px auto"}} onChange={formshandle} />
                    {errors.lastname && <span style={{color:"red"}}>{errors.lastname} </span>}
                    <TextField fullWidth label='Email' placeholder="Enter your email" name="email" value={values.email} sx={{margin:"10px auto"}} onChange={formshandle} />
                    {errors.email && <span style={{color:"red"}}>{errors.email} </span>}
                    {/* <FormControl component="fieldset">
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                    <TextField fullWidth label='Phone Number' placeholder="Enter your phone number" />
                    <TextField fullWidth label='Password' placeholder="Enter your password"/>
                    <TextField fullWidth label='Confirm Password' placeholder="Confirm your password"/>
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    /> */}
                   
                    <Button type='submit' variant='contained' color='primary'>Sign up</Button>
                    </form>
            </Grid>
        </Paper>
    </Grid>
  )
}

export default Form