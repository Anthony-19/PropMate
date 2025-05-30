export const Button = (props) => {
    return(
        <button className="form-button">
        {props.icon && <img src={props.icon} alt=""/> }
        {props.label}
    </button>
    )
   
}

export const LoginButton = () => {
    return(
        <>
        <button className="login-btn">
            Login
        </button>
        </>
    )
}


export const SignUpBtn = () => {
    return(
        <>
        <button className="signUp-btn">
            Sign Up
        </button>
        </>
    )
}

 export function InvitedBtn(props) {
  
  return (
    <div className='button-container'>
      <button className='next' onClick={props.onClick}>{props.steps === 3 ? 'Complete' : "NEXT"} </button>
    </div>
  )
}
