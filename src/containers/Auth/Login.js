import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";
import './Login.scss';
import { handleLoginApi } from "../../services/userService";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            isShowPassword: false,
            errMessage: ''
        }
    }

    handleOnChangeUserName = (event) => {
        this.setState({
            userName: event.target.value
        })
    }

    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleLogin = async () => {
        this.setState({
            errMessage: ''
        })
        try {
            let data = await handleLoginApi(this.state.userName, this.state.password);
            if(data && data.errCode !== 0) {
                this.setState({
                    errMessage: data.message
                })
            }
            if(data && data.errCode === 0) {
                this.props.userLoginSuccess(data.user);
            }
        }catch(error) {
            if(error.response) {
                if(error.response.data) {
                    this.setState({
                        errMessage: error.response.data.message
                    })
                }
            }
        }
    }

    handleShowHiddenPassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }

    render() {
        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content'>
                        <div className='col-12 login-title'>LOGIN</div>
                        <div className='form-group col-12 username'>
                            <label>UserName:</label>
                            <input 
                                type='text' 
                                className='col-12' 
                                placeholder='Enter user name' 
                                value={this.state.userName}
                                onChange={(event) => this.handleOnChangeUserName(event)}
                            />
                        </div>
                        <div className='form-group col-12 password'>
                            <label>Password:</label>
                            <div className="custom-password">
                                <input 
                                    type={this.state.isShowPassword ? 'text' : 'password'} 
                                    className='col-12' 
                                    placeholder='Enter your password'
                                    onChange={(event) => this.handleOnChangePassword(event)} 
                                />
                                <span
                                    onClick={() => this.handleShowHiddenPassword()}
                                >
                                    <i className={this.state.isShowPassword ? "far fa-eye-slash" : "far fa-eye"}></i>
                                </span>
                            </div>
                        </div>
                        <div className='col-12' style={{color: 'red'}}>
                            {this.state.errMessage}
                        </div>
                        <div className='col-12'>
                            <button 
                                className='col-12 btn-login'
                                onClick={() => this.handleLogin()}
                            >
                                Login
                            </button>
                        </div>
                        <div className='col-12 forgot-password'>
                            <span>
                                Forgot use password?
                            </span>
                        </div>
                        <div className='col-12 text-center'>
                            <span>Or login with:</span>
                        </div>
                        <div className='col-12 social-icon mt-3'>
                            <i className="fab fa-google-plus-g google"></i>
                            <i className="fab fa-facebook-f facebook"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        lang: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
