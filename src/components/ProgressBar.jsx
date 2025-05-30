import { useState } from 'react'

function ProgressBar(props) {
  // const styles = {
  //   maxWidth: props.setup === 2 ? '100px' : '20px',
  //   backgroundColor: props.setup === 2 ? '#174EA6' : null
  // }
  let styles;
  if(props.steps === 2) {
    styles = {
    backgroundColor: '#174EA6',
    maxWidth: '120px'
  }
  }
  else if(props.steps === 3) {
    styles = {
    backgroundColor: '#174EA6',
    maxWidth: '200px'
  }
}
 
  return (
    <div className='invited-steps'>
      <p className='invited-steps-title'>Step {props.steps} of 3</p>
      <div className='invited-steps-bar-container'>
        <span className='invited-steps-bar'style={styles}></span>
      </div>
    </div>
  )
}

export default ProgressBar
