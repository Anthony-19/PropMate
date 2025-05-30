import { useState,useNavigate } from 'react'
import FormTitle from './FormTitle'
import AccountSetupLL from './AccountSetupLL'
import ProgressBar from './ProgressBar'
import HeaderInvited from './HeaderInvited'

import './Landlord.css'
// import AccountSetupScreen from '../../components/AccountSetupScreen'
// import LeaseAgreement from '../../components/LeaseAgreement'
// import Walkthrough from '../../components/Walkthrough'
// import ProgressBar from '../components/ProgressBar'
import InvitedBtn from './InvitedBtn'
import SkipNow from '../../components/SkipNow'
// import Footer from '../components/Footer'
// import '../../Css/invitedTenant.css'
// import HeaderInvited from '../components/HeaderInvited'


    
function OnboardingLandlord() {
  // const navigate = useNavigate()
  const [steps, setSteps] = useState(1)
  

  const handleClick = () => {
    // if(steps >= 3) return
    // setSteps(prev => prev + 1)
      setSteps(prev => {
      const next = prev + 1
      if (next > 5) {
        navigate('/completed-screen')
      }
      return next
  })
    }
  return (
     <div className="landlord-container">
      <ProgressBar steps={steps} />
      <HeaderInvited />
      <FormTitle steps={steps}/>
      <AccountSetupLL />


      {/* <ProgressBar steps = {props.steps}/> */}
      {/* <HeaderInvited /> */}
      {/* <FormTitle steps ={props.steps}/> */}
      {/* {props.steps === 1 && <AccountSetupScreen />}
      {props.steps === 2 && <LeaseAgreement />}
      {props.steps === 3 && <Walkthrough />}  */}
      
      <InvitedBtn 
        handleClick = {handleClick}
        // onClick = {props.handleClick}
        // steps = {props.steps}
      />
      <SkipNow />
      {/* <Footer /> */}
    </div>
  )
}

export default OnboardingLandlord;
