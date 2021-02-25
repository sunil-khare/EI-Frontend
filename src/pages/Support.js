import '../assets/css/support.css'
import logo from '../assets/img/logo.png';
import { Redirect } from 'react-router-dom';
import Footer from '../providers/Footer'
import React from 'react'
import { Link } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';

class Support extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fullName: '',
            customerId: '',
            aws_accountId: '',
            email:'',
            discription:"",
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
            <div className = "" >
                <div className="row App">
                    <div >
                        <img src={logo} alt="logo" width="150" />
                    </div>
                    <div style={{ right: 10, position: 'absolute' }}>
                        <label className="menuList"><Link to="/dashboard" className="link">Dashboard</Link></label>
                        {/* <label className="menuList" ><Link to="/configure" className="link">Configure</Link></label> */}
                        <label className="menuList"><Link to="/support" className="link">Support</Link></label>

                        <label className="menuList"><Link to="/profile" className="link">Profile</Link></label>
                        <label className="menuList" onClick={this.logout}><span className="link">Logout</span></label>
                        {/* <label className="menuList"><Link to="/login" className="link">Login</Link></label> */}
                        {/* <label className="menuList"><Link to="/signup" className="link">Signup</Link></label> */}
                    </div>

                </div>
                { this.state.redirect ? (<Redirect push to="/dashboard" />) : null}
                <div className="d-flex justify-content-center">
                <div className="support ">
                    <h2>Tell us Problem</h2>
                    <hr></hr>

                    <form onSubmit={this.support}>

                        <div className="form-group">
                       
                            <label >Full Name</label>
                            <input type="text" className="form-control" id="name" value={this.state.currentPassword} onChange={(currentPassword) => this.setState({ currentPassword: currentPassword.target.value })} aria-describedby="emailHelp" placeholder="Enter Full Name" />
                        </div>
                        <div className="form-group">
                            <label >Customer Id</label>
                            <input type="text" className="form-control" id="customerId" value={this.state.newPassword} onChange={(newPassword) => this.setState({ newPassword: newPassword.target.value })} aria-describedby="emailHelp" placeholder="Enter Marketplace Id" />
                        </div>
                        <div className="form-group">
                            <label >AWS Account Id</label>
                            <input type="text" className="form-control" id="accountId" value={this.state.confirmPassword} onChange={(conformPassword) => this.setState({ conformPassword: conformPassword.target.value })} aria-describedby="emailHelp" placeholder="Enter AWS Account id" />
                        </div>
                        <div className="form-group">
                            <label >Email</label>
                            <input type="email" className="form-control" id="exampleInputPass1" value={this.state.confirmPassword} onChange={(conformPassword) => this.setState({ conformPassword: conformPassword.target.value })} aria-describedby="emailHelp" placeholder="Enter Email" />
                        </div>
                        <div className="form-group">
                            <label>Discribe Problem</label>
                            <textarea className="form-control" id="discription" rows="3" value={this.state.discription} onChange={(discription) => this.setState({ discription: discription.target.value })} placeholder="Describe your Problem"></textarea>
                        </div>
                        <div style={{ textAlign: 'center', marginTop: 10, marginBottom: 10 }}>
                            <button type="submit" className="btn btn-primary btn-block" >Send Request</button>
                        </div>



                    </form>
                    <hr></hr>
                    <Footer />
            {/* <DateTime/> */}
                    
                </div>
                </div>
                {/* */}
            </div>

        )
    }
}
export default Support;