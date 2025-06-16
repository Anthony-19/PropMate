import { useNavigate } from "react-router-dom"
function HeaderInvited() {
  const navigate = useNavigate()

  const handleClick = () =>  {
    navigate("/landlord-dashboard")
  }
  return (
    <header className='header-invited' style={{paddingTop: '0rem', paddingBottom: "0rem"}}>
      <h1 className='header-invited-title'>
        <span className='nav-header-invited'>PropMate</span>
      </h1>
      <p className='dashboard' onClick={handleClick}>Go to dashboard</p>
    </header>
  )
}

export default HeaderInvited
