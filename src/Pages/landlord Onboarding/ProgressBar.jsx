import { useState } from 'react'

function ProgressBar(props) {
  // const styles = {
  //   maxWidth: props.setup === 2 ? '100px' : '20px',
  //   backgroundColor: props.setup === 2 ? '#174EA6' : null
  // }
  // const [steps, setSteps] = useState(1)
  

  // const handleClick = () => {
  //   // if(steps >= 3) return
  //   // setSteps(prev => prev + 1)
  //     setSteps(prev => {
  //     const next = prev + 1
  //     if (next > 3) {
  //       navigate('/completed-screen')
  //     }
  //     return next
  // })
  //   }
  let styles;
   if(props.steps === 1) {
    styles = {
    backgroundColor: '#174EA6',
    maxWidth: '20px'
  }}
  if(props.steps === 2) {
    styles = {
    backgroundColor: '#174EA6',
    maxWidth: '60px'
  }
  }
  else if(props.steps === 3) {
    styles = {
    backgroundColor: '#174EA6',
    maxWidth: '120px'
  }
  
}
 else if(props.steps === 4) {
    styles = {
    backgroundColor: '#174EA6',
    maxWidth: '180px'
  }}
   else if(props.steps === 5) {
    styles = {
    backgroundColor: '#174EA6',
    maxWidth: '200px'
  }}
 
  return (
    <div className='invited-steps'>
      <p className='invited-steps-title'>Step {props.steps} of 5</p>
      <div className='invited-steps-bar-container'>
        <span className='invited-steps-bar'style={styles}></span>
      </div>
    </div>
  )
}

export default ProgressBar
