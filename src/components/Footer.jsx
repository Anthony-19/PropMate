import { useLocation } from "react-router-dom";

export const Footer = () => {
    const Location = useLocation();
    const footerStyle = {
        color: Location.pathname === '/signup' ? '#D4AF37' : Location.pathname === '/learn-more' ? '#D4AF37' :'',
        textAlign: 'center'
    }
    return(
        <p className="footer" style={footerStyle}><small>Terms of use <span>|</span> Privacy</small></p>
    )
}