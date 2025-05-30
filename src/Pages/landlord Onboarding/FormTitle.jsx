

function FormTitle(props) {
  let title;
  if(props.steps === 1){
    title = 'More Details about you'
  }
  else if(props.steps === 2){
    title = 'Add Your Property Details'
  }
  else if (props.steps === 3) {
    title = 'Confirm Property Location'
  }
   else if (props.steps === 4) {
    title = 'Lease Agreement and Terms & Conditions'
  }
   else if (props.steps === 5) {
    title = 'Tenant Management and Dashboard Access'
  }
   else if (props.steps === 6) {
    title = ''
  }
  return (
    <div className='form-title-container'>
      <h1 className='form-title'>{title}</h1>
    </div>
  )
}

export default FormTitle
