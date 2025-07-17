import { useState, useEffect } from 'react'
import eyeIcon from '../assets/images/eye-icon.svg'
import googleIcon from '../assets/images/google-icon.svg'
import { LoginButton } from '../components/Button.jsx'
import { HaveAccount } from '../components/HaveAccount.jsx'
import { Link, useNavigate } from 'react-router-dom';
export default function SignIn(){
    // useEffect(() => {
    //     document.body.classList.add('signin-background');
      
    //     return () => {
    //       document.body.classList.remove('signin-background');
    //     };
    //   }, []);

    const [loading, setLoading] = useState('');
     const handleGoogle = async () => {
      setLoading('google');
    // Redirect user to backend endpoint which starts the OAuth flow
    window.location.href = `https://pms-bd.onrender.com/api/auth/google?type=signin`;
}

    const navigate = useNavigate();
    const text = (
        <>
              Don’t have account? <Link to='/signup-role' className='signUp-text'>Sign Up</Link>
        </>
      )
    const [flip, setFlip] = useState(true)

    const handleFlip = (e) => {
        setFlip(prevFlip => !prevFlip)
        console.log(e)
    }

    const validate = (data) => {
        const formError = {}

        if(!data.email){
             formError.email = "Please enter your Email/Phone number"
        }

        else if((!/\S+@\S+\.\S+/.test(data.email)) && !/^\d{10}$/.test(data.email)) {
                formError.email =  "Enter your Email/Phone number"
        }
        else if(/^\d{10}$/.test(data.email) && data.email.length !== 10){
                formError.email = "Invalid  Phone Number"
        }
        else if(!/\S+@\S+\.\S+/.test(data.email)){
            formError.email = "Please enter your a valid Email"
        }

        if(!data.password){
            formError.password = "Password field cant be empty"
        }
        else if(data.password.length < 5){
            formError.password = "Please put a stronger password"
        }

        return formError
    }

    const [error, setError] = useState({})
    const [formValue, setFormValue] = useState({});

    const formSubmit = async (e) => {
        // const rawData = Object.fromEntries(formData.entries())
        // const cleanedData = {
        //         ...rawData,
        //         'remember-me': rawData['remember-me'] === "on" ? true : false
        //        }

        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const rawData = Object.fromEntries(formData.entries())
        //rawData["remember-me"] = formData.get("remember-me") === "on" ? true : false;
        const cleanedData = {
         ...rawData,
         'remember-me': rawData['remember-me'] === "on" ? true : false
        }

            const validateForm = validate(cleanedData)

            if(Object.keys(validateForm).length > 0){
                setError(validateForm)
                return
            }


               setError({})
               setFormValue(cleanedData);
                // e.target.submit();
            //    console.log(rawData);
            //    console.log(cleanedData);

            //    if(!validate()) return;
            // navigate('/invited-tenant')
            // navigate('/landlord-welcome')
             setLoading('form');
               try{
               
                const response = await fetch('https://pms-bd.onrender.com/api/auth/login', {
                    method:'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({email: cleanedData.email, password: cleanedData.password})
                    
                })

                
                if(response.ok){
                    setLoading('');
                    const data = await response.json()
                     localStorage.setItem('token', data.token);
                     localStorage.setItem('userName', data.user.name)
                     localStorage.setItem('role', data.user.role)
                     localStorage.setItem('email', data.user.email)
                    if(data.user.role === 'landlord'){
                        navigate('/landlord-welcome')
                    }
                  
                    else if(data.user.role === 'tenant'){
                        navigate('/invited-tenant')
                    }

                }
                else{
                    setLoading('');
                    setError({email: "Invalid email or password"})
                }
               }

               catch(error) {
                setLoading('');
                  setError({ email: "Something went wrong. Please try again." });
               }
    }
    
    return(
        <section className="sign-in-container">
          <form onSubmit={formSubmit} className='sign-in-form'>
            <h4 className="form-header">WELCOME BACK</h4>
            <p className="form-subheader">Sign into your  PropMate account to continue</p>
            <div className="email-phone-number">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name='email' placeholder="Enter your Email"/>
                {error.email && <span className='error'>{error.email}</span>}
            </div>
            <div className="password">
                <label htmlFor="password">Password</label>
                <div className="input-wrapper">
                    <input type={flip === true ? "password": "text"} id="password" name='password' placeholder="Enter your password" />
                    <img src={eyeIcon} alt="visibility" className='visibility' onClick={handleFlip}/>
                    
                </div>
                {error.password && <span className='error'>{error.password}</span>}
            </div>
            <div className="remember-me">
                <div className="remember-me-checked">
                    <input type="checkbox" id="checkbox" name='remember-me'/>    
                    <label htmlFor="checkbox">Remember Me</label>
                </div>
                <p className='forgot-password'><Link to='/forgot-password'>Forgot Password</Link></p>
            </div>
            <div className="login" style={{width: "100% !important"}}>
                {/* <button className="login-btn" disabled={loading === 'form'}>
                 {loading === 'form' && <span id='loader'></span>}
           Login
        </button> */}
                <LoginButton label="Login" id="login" loading={loading === 'form'}/>
            </div>
            <div className="line-breaker">
                <span></span>
                <p>or</p>
                <span></span>
            </div>
            <div className="google-login">
                 <button type="button" className="form-button" onClick={handleGoogle} disabled={loading === 'google'}>
                 {loading === 'google' && <span id='loader'></span>}
                <img src={googleIcon} alt=""  id='google-icon'/>
                Sign Up with Google
              </button>
                {/* <Button label="Continue with Google" icon={googleIcon} id="google-login"/> */}
                {/* check it out//Google's OAuth 2.0 authentication system. */}
            </div>
            <div id='have-account'>
                <HaveAccount label={text}/>
            </div>
          </form>
        </section>
    )
}