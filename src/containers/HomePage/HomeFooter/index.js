import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles.scss';

class HomeHeader extends Component {
    
    render() {

        return (
            <div className='home-footer'>
                <div className='foot-end'>&copy; 2022 BookingCare.</div>
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
