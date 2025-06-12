import React from 'react'
import { useNavigate } from 'react-router-dom'

function SkipNow() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/tenant-dashboard')
  }
  return (
    <div className='skip-now-container'>
      <p className='skip-now' onClick={handleClick} style={{cursor: "pointer"}}>Skip for now</p>
    </div>
  )
}

export default SkipNow
