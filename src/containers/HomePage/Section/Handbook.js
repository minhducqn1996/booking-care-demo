import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Handbook extends Component {
    render() {

        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1
        };

        return (
            <div className='section-container even'>
                <div className='section-header'>
                    <h2>Cẩm nang</h2>
                    <button className='btn-section'>xem thêm</button>
                </div>
                <div className='section-content'>
                    <div className='section-body'>
                        <Slider {...settings}>
                            <div className='section-group-content handbook'>
                                <div className='section-img handbook'></div>
                                <div className='section-text'><h5>7 địa chỉ khám Phụ khoa tốt ở Hà Nội</h5></div>
                            </div>
                            <div className='section-group-content handbook'>
                                <div className='section-img handbook'></div>
                                <div className='section-text'><h5>7 địa chỉ khám Phụ khoa tốt ở Hà Nội</h5></div>
                            </div>
                            <div className='section-group-content handbook'>
                                <div className='section-img handbook'></div>
                                <div className='section-text'><h5>7 địa chỉ khám Phụ khoa tốt ở Hà Nội</h5></div>
                            </div>
                            <div className='section-group-content handbook'>
                                <div className='section-img handbook'></div>
                                <div className='section-text'><h5>7 địa chỉ khám Phụ khoa tốt ở Hà Nội</h5></div>
                            </div>
                            <div className='section-group-content handbook'>
                                <div className='section-img handbook'></div>
                                <div className='section-text'>
                                    <h5>7 địa chỉ khám Phụ khoa tốt ở Hà Nội</h5>
                                </div>
                            </div>
                            <div className='section-group-content handbook'>
                                <div className='section-img handbook'></div>
                                <div className='section-text'><h5>7 địa chỉ khám Phụ khoa tốt ở Hà Nội</h5></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Handbook);
