

function FormTitle(props) {
  let title;
  if(props.steps === 1){
    title = 'More Details about you'
  }
  else if(props.steps === 2){
    title = 'Lease and Payment Details'
  }
  else if (props.steps === 3) {
    title = ''
  }
  return (
    <div className='form-title-container'>
      <h1 className='form-title'>{title}</h1>
    </div>
  )
}

export default FormTitle
