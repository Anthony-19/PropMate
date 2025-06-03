// import React, { useEffect } from 'react'
// import { useLocation, useNavigate } from 'react-router-dom'

// function GoogleAuthentication() {
//     const location = useLocation();
//     const navigate = useNavigate()
   

//     useEffect(() => {
//        const param = new URLSearchParams(location.search)
//     console.log(param);
//     const token = param.get("token")
//     console.log(token)
//     const role = param.get('role')
//       if(token) {

//         localStorage.setItem('token', token)
//         localStorage.setItem("role", role)
//         if(role === "tenant"){
//           navigate("/invited-tenant")
//         }
//         else if(role === 'landlord'){
//           navigate('/landlord-welcome')
//         }
//       }
//     },[location])
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default GoogleAuthentication


import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function GoogleAuthentication() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const param = new URLSearchParams(location.search);
    const token = param.get('token');
    const role = param.get('role');

    if (token && role) {
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);

      if (role === 'tenant') {
        navigate('/invited-tenant', { replace: true });
      } else if (role === 'landlord') {
        navigate('/landlord-welcome', { replace: true });
      } else {
        navigate('/signin', { replace: true });
      }
    } else {
      navigate('/signin', { replace: true }); // fallback if token/role not found
    }
  }, [location.search, navigate]);

  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <p>Signing you in with Google...</p>
    </div>
  );
}

export default GoogleAuthentication;
