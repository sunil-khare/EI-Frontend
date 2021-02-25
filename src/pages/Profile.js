import '../assets/css/Profile.css'
import logo from '../assets/img/logo.png';
import { Redirect } from 'react-router-dom';
import Footer from '../providers/Footer'
import React from 'react'
import { Link } from 'react-router-dom';

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPassword: '',
            newPassword: '',
            confirmPassword: '',
            agree: false,
            redirect: false,
            error: false,
            errorMessage: ''
        }
        this.logout = this.logout.bind(this)

    }
    UNSAFE_componentWillMount() {

        if (sessionStorage.getItem("userData")) {

        }
        else {

            this.setState({ redirect: true });
        }
    }
    logout() {
        this.setState({ redirect: true });
        sessionStorage.removeItem("userData")
        
    }

    render() {
        if (this.state.redirect === true) {
            return <Redirect to="/login"></Redirect>
        }
        return (
            <div>
                <div className="row App">
                    <div >
                        <img src={logo} alt="logo" width="150" />
                    </div>
                    <div style={{ right: 10, position: 'absolute' }}>
                        <label className="menuList"><Link to="/dashboard" className="link">Dashboard</Link></label>
                        {/* <label className="menuList" ><Link to="/configure" className="link">Configure</Link></label> */}
                        <label className="menuList"><Link to="/support" className="link">Support</Link></label>

                        <label className="menuList"><Link to="/profile" className="link">Profile</Link></label>
                        <label className="menuList" onClick={this.logout} ><Link to="#" className="link">Logout</Link></label>
                        {/* <label className="menuList"><Link to="/login" className="link">Login</Link></label> */}
                        {/* <label className="menuList"><Link to="/signup" className="link">Signup</Link></label> */}
                    </div>

                </div>
                {/* { this.state.redirect ? (<Redirect push to="/dashboard" />) : null} */}
                <div className="d-flex justify-content-center">
                <div className="profile">
                    <h2>Change Password</h2>
                    <hr></hr>
                    <form>

                        <div className="form-group">
                            <label >Current Password</label>
                            <input type="password" className="form-control" id="exampleInputEmail1" value={this.state.currentPassword} onChange={(currentPassword) => this.setState({ currentPassword: currentPassword.target.value })} aria-describedby="emailHelp" placeholder="Enter current Password" />
                        </div>
                        <div className="form-group">
                            <label >New Password</label>
                            <input type="password" className="form-control" id="exampleInputPass" value={this.state.newPassword} onChange={(newPassword) => this.setState({ newPassword: newPassword.target.value })} aria-describedby="emailHelp" placeholder="Enter new Password" />
                        </div>
                        <div className="form-group">
                            <label >Confirm Password</label>
                            <input type="password" className="form-control" id="exampleInputPass1" value={this.state.confirmPassword} onChange={(conformPassword) => this.setState({ conformPassword: conformPassword.target.value })} aria-describedby="emailHelp" placeholder="Enter confirm password" />
                        </div>

                        <div style={{ textAlign: 'center', marginTop: 10, marginBottom: 10 }}>
                            <button type="submit" className="btn btn-primary btn-block" >Change Password</button>
                        </div>



                    </form>
                    <hr></hr>
                    <Footer />
                </div>
                </div>
                {/* */}
            </div>

        )
    }
}
export default Profile;