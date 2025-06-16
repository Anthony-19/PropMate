import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

function SkipNow() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname.startsWith("/landlord-welcome")){
       navigate('/landlord-dashboard')
     
    }
   else if(location.pathname ===  "/invited-tenant"){
     navigate('/tenant-dashboard')
   }
  }
  return (
    <div className='skip-now-container'>
      <p className='skip-now' onClick={handleClick} style={{cursor: "pointer"}}>Skip for now</p>
    </div>
  )
}

export default SkipNow
