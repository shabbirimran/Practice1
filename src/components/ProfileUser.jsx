import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import JSONPretty from 'react-json-pretty'
const ProfileUser = () => {
    const {user,isAuthenticated} =useAuth0()
  return (
   isAuthenticated &&(
    <div>
      <img src={user.picture} alt="userimg"/>
    
   <JSONPretty data={user}/>
   </div>
    
         //<div> {JSON.stringify(user,null,2)}</div> 
    )
  
  )
}

export default ProfileUser