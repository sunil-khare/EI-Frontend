import '../assets/css/Login.css'
import Footer from '../providers/Footer'
import { Alert } from 'react-bootstrap';
import { PostData } from '../services/PostData'
import {
    Link,
    Redirect,
} from "react-router-dom";
import React from "react";
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            redirect: false,
            error: false,
            errorMessage: ''
        }
        this.login = this.login.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    login(e) {
        e.preventDefault();
        // alert('Login')

        if (this.state.username !== '' && this.state.password !== '') {
            PostData('login', 'POST', this.state).then((result) => {
                let responseJson = result;
                if (responseJson.status) {
                    this.setState({ error: true })
                    this.setState({ errorMessage: 'Password is Invalid!'})
                } else if (responseJson) {
                    sessionStorage.setItem('userData',JSON.stringify(responseJson));
                    this.setState({ redirect: true, error: false })
                }

            }).catch((error) => {
                this.setState({ error: true })
                this.setState({ errorMessage: 'Username/Password is Invalid!'})
            });
        }
        else {
            this.setState({ error: true })
            this.setState({ errorMessage: 'Username/Password is Empty!' })
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
        // console.log(this.state)
    }

    render() {

        // if (this.state.redirect) {
        //     return (<Redirect to={'/dashboard'} />)
        // }

        if (sessionStorage.getItem('userData')) {
            return (<Redirect to={'/dashboard'} />)
        }

        return (
            <div className="d-flex justify-content-center div-main">
                <div className=" login">
                    <h2>Login</h2>
                    <form onSubmit={this.login}>

                        <div class="form-group">
                            <label for="exampleInputEmail1">Username</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" name="username" onChange={this.onChange} aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPass" name="password" onChange={this.onChange} aria-describedby="emailHelp" placeholder="Enter password" />
                        </div>
                        <div class="form-group">
                            {this.state.error ? <Alert variant="danger">{this.state.errorMessage}</Alert> : null}
                        </div>
                        <div style={{ textAlign: 'center', marginTop: 10, marginBottom: 10 }}>
                            <button type="submit" class="btn btn-primary btn-block" >Login</button>
                        </div>
                        <div style={{ textAlign: 'right', marginTop: 10, marginBottom: 10 }}>
                            <Link to="/signup">Don't have an account?</Link>
                        </div>


                    </form>
                    
                    <Footer />
                </div>
                {/* */}
             
            </div>

        )
    }
}
export default Login;