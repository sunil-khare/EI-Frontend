import '../assets/css/Login.css'
import React from 'react'
import {Modal,Button } from 'react-bootstrap';

class Configure extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            setShow: true,
            show: false,
        }
        
    }

    render() {
       
        return (
            <div>
                <Modal show={this.state.show} onHide={this.handleClose} centered size="lg">
                    <form>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>Hello</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                            <Button variant="primary" onClick={this.handleClose}>Save Changes</Button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </div>

        )
    }
}
export default Configure;