import React from 'react'

function InvitedBtn(props) {
  return (
  
    <div className='button-container'>
      <button className='next' onClick={props.handleClick}>{props.steps === 5 ? 'Complete' : "NEXT"} </button>
    </div>

  )
}

export default InvitedBtn
