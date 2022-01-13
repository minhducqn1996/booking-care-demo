import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { emitter } from '../../utils/emitter';

class ModalUser extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: ''
        }

        this.listenToEmitter();
    }

    listenToEmitter() {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
            this.setState({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                address: ''
            })
        })
    }
 
    componentDidMount() {
    }

    toggle = () => {
        this.props.toggleFromParent();
    }

    handleOnChangeInput = (event, id) => {
        let copyState = { ...this.state};
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        })
    }

    checkValidateInput = () => {
        let inValid = true; 
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address'];
        for( let i = 0 ; i < arrInput.length ; i++) {
            if(!this.state[arrInput[i]]){
                inValid = false;
                alert('Missing parameter ' + arrInput[i])
                break; 
            };
        }
        return inValid;
    }

    handleAddNewUser = () => {
        let inValid = this.checkValidateInput();
        if(inValid) {
            //call api create modal
            this.props.createNewUser(this.state);
        }
    }

    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => this.toggle()}
                size="lg"
                className="modal-user-container"
            >
                <ModalHeader toggle={() => this.toggle()}>
                    Create a new user
                </ModalHeader>
                <ModalBody>
                    <div className="modal-body-user">
                        <div className="input-container">
                            <label>Email:</label>
                            <input 
                                type="text" 
                                onChange={(event) => {this.handleOnChangeInput(event, 'email')}} 
                                value={this.state.email}
                            />
                        </div>
                        <div className="input-container">
                            <label>Password:</label>
                            <input 
                                type="password" 
                                onChange={(event) => {this.handleOnChangeInput(event, 'password')}} 
                                value={this.state.password}
                            />
                        </div>
                        <div className="input-container">
                            <label>First name:</label>
                            <input 
                                type="text" 
                                onChange={(event) => {this.handleOnChangeInput(event, 'firstName')}} 
                                value={this.state.firstName}
                            />
                        </div>
                        <div className="input-container">
                            <label>Last name:</label>
                            <input 
                                type="text" 
                                onChange={(event) => {this.handleOnChangeInput(event, 'lastName')}} 
                                value={this.state.lastName}
                            />
                        </div>
                        <div className="input-container max-width-input">
                            <label>Address:</label>
                            <input 
                                type="text" 
                                onChange={(event) => {this.handleOnChangeInput(event, 'address')}} 
                                value={this.state.address}
                            />
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                <Button
                    className="px-2"
                    color="primary"
                    onClick={() => {this.handleAddNewUser()}}
                >
                    Add new
                </Button>
                {' '}
                <Button 
                    className="px-2"
                    onClick={() => this.toggle()}
                >
                    Close
                </Button>
                </ModalFooter>
            </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
