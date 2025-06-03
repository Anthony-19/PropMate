import { useState,useEffect } from 'react'
import { useNavigate, useLocation, BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SingUp'
import { Footer } from './components/Footer'
import NavigationLinks from './components/NavigationLinks'
import OtpVerification from './components/OtpVerification'
import LandingPage from './Pages/LandingPage'
import VerificationSuccess from './components/VerificationSuccess'
import AboutUs from './Pages/AboutUs'
import PropmateSteps from './Pages/PropmateSteps'
import RoleSelection from './Pages/SignUpRole'
import ForgotPassword from './Pages/ForgotPassword'
import ResetPassword from './Pages/ResetPassword'
import CreateNewPassword from './Pages/CreateNewPassword'
import InvitedTenant from './Pages/InvitedTenant'
import ProgressBar from './components/ProgressBar'
import CompletedScreen from './components/CompletedScreen'
import LandlordWelcome from './Pages/landlord Onboarding/LandlordWelcome'
import GoogleAuthentication from './Pages/GoogleAuthentication'

import './App.css'

function App() {
  const location = useLocation();
  console.log(location)
  const isSignIn = location.pathname === '/signin' ? 'App signin-background' : 'App';
  const style = {
    width: location.pathname === '/' ? '100%' : '',
    maxWidth: location.pathname === '/' ? '100%' : '',
    padding: location.pathname === '/' ? '0rem' : location.pathname === '/aboutus' ? '1rem' : '',
    borderRadius: location.pathname === '/' ? '0.5rem' : ''
  
  }

  //   const HeaderStyle = {
  //   display: location.pathname === '/invited-tenant' ? 'none' : location.pathname === '/completed-screen' ? 'none' : location.pathname === '/landlord-welcome' ? 'none' : 'flex',
  // }
 
  const hideHeaderRoutes = [
  '/invited-tenant',
  '/completed-screen',
  '/landlord-welcome',
  'landlord-welcome/*'
]

// const shouldShowHeader = !hideHeaderRoutes.includes(location.pathname)
const shouldShowHeader = !hideHeaderRoutes.some(path =>
  location.pathname === path || location.pathname.startsWith(path + '/')
)

//   .App {
//   width: 100%;
//   max-width: 1280px;
//   /* min-height: 50vh; */
//   padding: 4rem;
//   background-color: #FFFFFF;
//   background-repeat: no-repeat;
//   background-size: cover;
//   /* background-position: center; */
// }

const navigate = useNavigate()
  const [steps, setSteps] = useState(1)
  

  const handleClick = () => {
    // if(steps >= 3) return
    // setSteps(prev => prev + 1)
      setSteps(prev => {
      const next = prev + 1
      if (next > 3) {
        navigate('/completed-screen')
      }
      return next
  })
    }

//     useEffect(() => {
//   console.log("Current steps:", steps)
//   if (steps > 3) {
//     navigate('/completed-screen')
//   }
// }, [steps, navigate])


  return (
    
    // <div className={isSignIn}> 
    //   <VerificationSuccess />
    // </div>
    <div className={isSignIn} style={style}>
      {location.pathname === '/invited-tenant' && <ProgressBar steps={steps}/>}
      {/* <Header style={HeaderStyle}/> */}
      {shouldShowHeader && <Header />}

        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/otp-verification' element={<OtpVerification />}/>
          <Route path='/signin' element={<SignIn />}/>
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/signup-role' element={<RoleSelection />}/>
          <Route path='/aboutus' element={<AboutUs />}/>
          <Route path='/learn-more' element={<PropmateSteps />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/create-new-password' element={<CreateNewPassword />} />
          <Route path='/invited-tenant' element={<InvitedTenant steps={steps} handleClick={handleClick} />} />
          <Route path='/completed-screen' element={<CompletedScreen />} />
          <Route path='/landlord-welcome/*' element={<LandlordWelcome />} />
          <Route path="/google/callback" element={<GoogleAuthentication />} />
        </Routes>
      <Footer />
    </div>
  )
}

export default App
