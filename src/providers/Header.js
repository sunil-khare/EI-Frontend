import logo from '../assets/img/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

function Header(){
 
    return(

        <div className="row App">
        <div >
          <img src={logo} alt="logo" width="150"/>
        </div>
        <div style={{right:10,position:'absolute'}}>
        {/* <label className="menuList"><Link to="/" className="link">Home</Link></label> */}
        <label className="menuList" ><Link to="/configure" className="link">Configure</Link></label>
        <label className="menuList"><Link to="/support" className="link">Support</Link></label>
        <label className="menuList"><Link to="/profile" className="link">Profile</Link></label>
        <label className="menuList" ><Link to="/login" className="link">Logout</Link></label>
        {/* <label className="menuList"><Link to="/login" className="link">Login</Link></label> */}
        {/* <label className="menuList"><Link to="/signup" className="link">Signup</Link></label> */}
        </div>
        
      </div>

    )}

export default Header