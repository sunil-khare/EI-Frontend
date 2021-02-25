import '../assets/css/Signup.css'
import React from 'react'
import { Link,Redirect } from 'react-router-dom'
import { Alert } from 'react-bootstrap';
import { PostData } from '../services/PostData'
class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            account_id: '',
            agree: false,
            error: false,
            errorMessage: "",
            redirect:false
        }
        this.register = this.register.bind(this);
    }

    register(e) {
        e.preventDefault();
        if (this.state.email !== '' && this.state.password !== '' && this.state.account_id !== '') {
            if (this.state.agree === true) {
                let userData = {
                    client_firstname: this.state.firstName,
                    client_lastname: this.state.lastName,
                    client_email: this.state.email,
                    aws_account_id: this.state.account_id,
                    client_type: 'Freedom'
                }
                //Sign Up call
                PostData('register-client', 'POST', userData).then((result) => {
                    let responseJson = result;
                    if (responseJson.status === 'false') {
                        this.setState({ error: true })
                        this.setState({ errorMessage: responseJson.message })
                    } else if (responseJson) {
                        console.log(responseJson)
                        this.setState({ redirect:true})
                    }
                }).catch((error) => {
                    this.setState({ error: true })
                    this.setState({ errorMessage: 'Something Went Wrong! Please try again'+error })
                })
            } else {
                this.setState({ error: true, errorMessage: "Please Accept Terms & Conditions!" })
            }
        } else {
            this.setState({ error: true, errorMessage: "Please Fill All Fields" })
        }

    }

    render() {

        if (this.state.redirect) {
            return (<Redirect to={'/login'} />)
        }
        return (
            
            <div  className="d-flex justify-content-center div-main">
                <div className="signup">
                    <h3>Register</h3>
                    <form onSubmit={this.register}>
                        <div class="form-group">
                            <label>First Name</label>
                            <input type="text" class="form-control" value={this.state.firstName} onChange={(firstName) => this.setState({ firstName: firstName.target.value, error: false })} placeholder="Enter First Name" />
                        </div>
                        <div class="form-group">
                            <label >Last Name</label>
                            <input type="text" class="form-control" value={this.state.lastName} onChange={(lastName) => this.setState({ lastName: lastName.target.value, error: false })} placeholder="Enter Last Name" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail">Email</label>
                            <input type="email" class="form-control" value={this.state.email} onChange={(email) => this.setState({ email: email.target.value, error: false })} placeholder="Enter Email" />
                        </div>
                        <div class="form-group">
                            <label>Account Id</label>
                            <input type="test" class="form-control" value={this.state.account_id} onChange={(account_id) => this.setState({ account_id: account_id.target.value, error: false })} placeholder="Enter Account id" />
                        </div>
                        <div class="form-check" style={{ marginTop: 10, marginBottom: 10 }}>
                            <input type="checkbox" class="form-check-input" onClick={(checked) => this.setState({ agree: checked.target.checked })} />
                            <label class="form-check-label" for="exampleCheck1">Accept Terms & Condition <a href="https://www.cloud.in">Read more</a></label>
                        </div>
                        <div class="form-group">
                            {this.state.error ? <Alert variant="danger">{this.state.errorMessage}</Alert> : null}
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-primary btn-block">Register</button>
                        </div>
                    </form>
                    <div style={{ textAlign: 'right', marginTop: 10, marginBottom: 10 }}>
                        <Link to="/login">Already registered?</Link>
                    </div>
                </div>
                {/* <Footer /> */}
            </div>

        )
    }
}

export default Signup;