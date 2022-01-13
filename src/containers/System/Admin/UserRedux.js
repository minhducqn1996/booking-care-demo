import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
// import { getAllcodeService } from '../../../services/userService';
// import { LANGUAGES } from '../../../utils/constant'

class UserRedux extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // genderArr: []
        }
    }

    componentDidMount() {
        // try{
        //     let res = await getAllcodeService('GENDER');
        //     if(res && res.errCode === 0){
        //         this.setState({
        //             genderArr: res.data
        //         })
        //     }
        // }catch (e) {
        //     console.log(e);
        // }
    }
    


    render() {
        // let language = this.props.language;
        return (
            <div className='user-redux-container'>
                <div className='title'>
                    Learn React-Redux
                </div>
                <div className="user-redux-body">
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 my-3'><FormattedMessage id='manage-user.add' /></div>
                            <div className='col-3'>
                                <label><FormattedMessage id='manage-user.email' /></label>
                                <input className="form-control" type='text' />
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id='manage-user.password' /></label>
                                <input className="form-control" type='password' />
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id='manage-user.first-name' /></label>
                                <input className="form-control" type='text' />
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id='manage-user.last-name' /></label>
                                <input className="form-control" type='text' />
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id='manage-user.phone' /></label>
                                <input className="form-control" type='text' />
                            </div>
                            <div className='col-9'>
                                <label><FormattedMessage id='manage-user.address' /></label>
                                <input className="form-control" type='text' />
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id='manage-user.gender' /></label>
                                <select className="form-control">
                                    {/* <option value="default">Choose...</option> */}
                                    {/* {this.state.genderArr && this.state.genderArr.map((element, index) => {
                                        return (
                                            <option key={index}>{language === LANGUAGES.VI ? element.valueVi : element.valueEn}</option>
                                        )
                                    })} */}
                                    <option value="default">Choose...</option>
                                    <option value="1">...</option>
                                </select>
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id='manage-user.position' /></label>
                                <select className="form-control">
                                    <option value="default">Choose...</option>
                                    <option value="1">...</option>
                                </select>
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id='manage-user.role' /></label>
                                <select className="form-control">
                                    <option value="default">Choose...</option>
                                    <option value="1">...</option>
                                </select>
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id='manage-user.image' /></label>
                                <select className="form-control">
                                    <option value="default">Choose...</option>
                                    <option value="1">...</option>
                                </select>
                            </div>
                            <div className='col-12 mt-3'>
                                <button className='btn btn-primary'><FormattedMessage id='manage-user.save' /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
