// import React, { useState } from 'react'

export const Button = (props) => {
    // const [loading, setLoading] = useState(false);
    return(
        <button className="form-button">
        {props.icon && <img src={props.icon} alt=""/> }
        {props.label}
    </button>
    )
   
}

export const LoginButton = (props) => {
    const style = {
         display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
        width: "100%",
        cursor:'pointer',
    }
    return(
        <>
        <button id="login-btn" disabled={props.loading} style={style}>
            {props.loading && <span id='loader'></span>}
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
