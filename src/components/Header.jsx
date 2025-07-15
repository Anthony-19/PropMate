import { Link, useLocation, Navigate } from "react-router-dom"
import NavigationLinks from "./NavigationLinks";
import { LoginButtonLandingPage, SignUpBtn } from "./Button";
export default function Header(props){
    const Location = useLocation();
    const showNavLinks = Location.pathname === '/' ? <NavigationLinks /> : null;
    const showDashboard = Location.pathname === '/invited-tenant' ? 
    <p className='dashboard' style={{color: '#D4AF37', fontWeight:'500'}}>Go to dashboard</p> : 
    <p className="back-home" >Back to home</p>;

    const showButtons = Location.pathname === '/' ? 
        <div className="header-buttons">
        <Link to="/signin" className="signIn-link">
            <LoginButtonLandingPage />
        </Link>
        <Link to="/signup-role" className="signUp-link" >
            <SignUpBtn />
        </Link>
        </div> : <Link to='/' style={{textDecoration: 'none'}}>
            {showDashboard}
        </Link>;

        const navStyle = {
            backgroundColor: Location.pathname === '/' ? '#174EA6' : '',
            padding: location.pathname === '/' ? '1.5rem' : location.pathname === '/aboutus' ? '3rem 3rem 0 3rem ' : "",
            borderRadius: location.pathname === '/' ? '0.5rem 0.5rem 0rem 0rem' : '',
        }

        const logoStyle = {
            color: Location.pathname === '/' ? '#D4AF37' : '#174EA6',
        }
    return(
        <nav className="navbar-container" style={navStyle} >
          <h1 className="navbar-logo" style={logoStyle}>PropMate</h1>
          {showNavLinks}
        
         {showButtons}            
          
        </nav>
    )
}