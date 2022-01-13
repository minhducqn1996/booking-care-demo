import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class FamousDoctor extends Component {
    render() {
        let {settings} = this.props;
        
        return (
            
            <div className='section-container famous-doctor odd'>
                <div className='section-header'>
                    <h2>Chuyên khoa phổ biến</h2>
                    <button className='btn-section'>xem thêm</button>
                </div>
                <div className='section-content'>
                    <div className='section-body'>
                        <Slider {...settings}>
                            <div className='section-group-content famous-doctor'>
                                <div className='box-famous-doctor'>
                                    <div className='section-img famous-doctor'></div>
                                    <div className='text-famous-doctor'>
                                        <div>Phó giáo sư, tiến sĩ Duong Minh Trí</div>
                                        <div className='section-text'>Bác sĩ 1</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-group-content famous-doctor'>
                                <div className='box-famous-doctor'>
                                    <div className='section-img famous-doctor'></div>
                                    <div className='text-famous-doctor'>
                                        <div>Phó giáo sư, tiến sĩ Duong Minh Trí</div>
                                        <div className='section-text'>Bác sĩ 1</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-group-content famous-doctor'>
                                <div className='box-famous-doctor'>
                                    <div className='section-img famous-doctor'></div>
                                    <div className='text-famous-doctor'>
                                        <div>Phó giáo sư, tiến sĩ Duong Minh Trí</div>
                                        <div className='section-text'>Bác sĩ 1</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-group-content famous-doctor'>
                                <div className='box-famous-doctor'>
                                    <div className='section-img famous-doctor'></div>
                                    <div className='text-famous-doctor'>
                                        <div>Phó giáo sư, tiến sĩ Duong Minh Trí</div>
                                        <div className='section-text'>Bác sĩ 1</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-group-content famous-doctor'>
                                <div className='box-famous-doctor'>
                                    <div className='section-img famous-doctor'></div>
                                    <div className='text-famous-doctor'>
                                        <div>Phó giáo sư, tiến sĩ Duong Minh Trí</div>
                                        <div className='section-text'>Bác sĩ 1</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-group-content famous-doctor'>
                                <div className='box-famous-doctor'>
                                    <div className='section-img famous-doctor'></div>
                                    <div className='text-famous-doctor'>
                                        <div>Phó giáo sư, tiến sĩ Duong Minh Trí</div>
                                        <div className='section-text'>Bác sĩ 1</div>
                                    </div>
                                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(FamousDoctor);
