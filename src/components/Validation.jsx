import React from 'react'

const Validation = (values) => {
 const errors={}
 const email_pattern=/^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
//  const password_pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
 if(values.firstname===""){
    errors.firstname="Name is required";
 }
 if(values.lastname===""){
    errors.lastname="lastName is required";
 }
 if(values.email===""){
    errors.email="Email is required"
 }else if(!email_pattern.test(values.email)){
    errors.email="emais is not match";
 }
 return errors;
}

export default Validation