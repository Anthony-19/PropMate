import { useState } from 'react'
// import Header from '../components/Header'
import FormTitle from '../components/FormTitle'
import AccountSetupScreen from '../components/AccountSetupScreen'
import LeaseAgreement from '../components/LeaseAgreement'
import Walkthrough from '../components/Walkthrough'
// import ProgressBar from '../components/ProgressBar'
import {InvitedBtn} from '../components/Button'
import SkipNow from '../components/SkipNow'
// import Footer from '../components/Footer'
import '../Css/invitedTenant.css'
// import HeaderInvited from '../components/HeaderInvited'

function InvitedTenant(props) {


  return (


      <div className="invited-tenant-container">
      {/* {location.pathname === '/invited-tenant' && <HeaderInvited />}
      <ProgressBar steps = {props.steps}/> */}
      {/* <HeaderInvited /> */}
     
      <FormTitle steps ={props.steps}/>
      {props.steps === 1 && <AccountSetupScreen />}
      {props.steps === 2 && <LeaseAgreement />}
      {props.steps === 3 && <Walkthrough />}
      
      <InvitedBtn 
        onClick = {props.handleClick}
        steps = {props.steps}
      />
      <SkipNow />
      {/* <Footer /> */}
    </div>
  )
}

export default InvitedTenant
