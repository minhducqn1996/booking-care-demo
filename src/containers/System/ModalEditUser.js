import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import _ from 'lodash';

class ModalEditUser extends Component {

    constructor(props){
        super(props);
        this.state = {
            id: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: ''
        }

    }

    componentDidMount() {
        let user = this.props.currentEditUser;
        if(user && !_.isEmpty(user)) {
            this.setState({
                id: user.id,
                email: user.email,
                password: 'hardcode',
                firstName: user.firstName,
                lastName: user.lastName,
                address: user.address
            })
        }
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

    handleEditUser = () => {
        let inValid = this.checkValidateInput();
        if(inValid) {
            //call api create modal
            this.props.editUser(this.state);
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
                    Edit current user
                </ModalHeader>
                <ModalBody>
                    <div className="modal-body-user">
                        <div className="input-container">
                            <label>Email:</label>
                            <input 
                                type="text" 
                                onChange={(event) => {this.handleOnChangeInput(event, 'email')}} 
                                value={this.state.email}
                                disabled
                            />
                        </div>
                        <div className="input-container">
                            <label>Password:</label>
                            <input 
                                type="password" 
                                onChange={(event) => {this.handleOnChangeInput(event, 'password')}} 
                                value={this.state.password}
                                disabled
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
                        onClick={() => {this.handleEditUser()}}
                    >
                        Save changes
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
