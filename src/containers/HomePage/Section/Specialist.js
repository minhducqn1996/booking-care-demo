import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Specialist extends Component {
    render() {

        let {settings} = this.props;

        return (
            <div className='section-container odd'>
                <div className='section-header'>
                    <h2>Chuyên khoa phổ biến</h2>
                    <button className='btn-section'>xem thêm</button>
                </div>
                <div className='section-content'>
                    <div className='section-body'>
                        <Slider {...settings}>
                            <div className='section-group-content'>
                                <div className='section-img specialist'></div>
                                <div className='section-text'>Cơ xương khớp</div>
                            </div>
                            <div className='section-group-content'>
                                <div className='section-img specialist'></div>
                                <div className='section-text'>Cơ xương khớp</div>
                            </div>
                            <div className='section-group-content'>
                                <div className='section-img specialist'></div>
                                <div className='section-text'>Cơ xương khớp</div>
                            </div>
                            <div className='section-group-content'>
                                <div className='section-img specialist'></div>
                                <div className='section-text'>Cơ xương khớp</div>
                            </div>
                            <div className='section-group-content'>
                                <div className='section-img specialist'></div>
                                <div className='section-text'>Cơ xương khớp</div>
                            </div>
                            <div className='section-group-content'>
                                <div className='section-img specialist'></div>
                                <div className='section-text'>Cơ xương khớp</div>
                            </div>
                        </Slider>
                    </div>
                    
                </div>            
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialist);
