import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Specialist from './Section/Specialist';
import MedicalFacility from './Section/MedicalFacility';
import FamousDoctor from './Section/FamousDoctor';
import Handbook from './Section/Handbook';
import Media from './Section/Media';
import HomeFooter from './HomeFooter';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HomePage.scss';

class HomePage extends Component {
    
    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
        };

        return (
            <div>
                <HomeHeader />
                <Specialist settings={settings} />
                <MedicalFacility settings={settings} />
                <FamousDoctor settings={settings} />
                <Handbook />
                <Media />
                <HomeFooter />
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
