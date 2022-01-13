import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";


class MedicalFacility extends Component {

    render() {
        let {settings} = this.props;
        return (
            <div className='section-container even'>
                <div className='section-header'>
                    <h2>Cơ sở y tế nổi bật</h2>
                    <button className='btn-section'>xem thêm</button>
                </div>
                <div className='section-content'>
                    <div className='section-body'>
                        <Slider {...settings}>
                            <div className='section-group-content'>
                                <div className='section-img medical-facility'></div>
                                <div className='section-text'>Cơ xương khớp 1</div>
                            </div>
                            <div className='section-group-content'>
                                <div className='section-img medical-facility'></div>
                                <div className='section-text'>Cơ xương khớp 2</div>
                            </div>
                            <div className='section-group-content'>
                                <div className='section-img medical-facility'></div>
                                <div className='section-text'>Cơ xương khớp 3</div>
                            </div>
                            <div className='section-group-content'>
                                <div className='section-img medical-facility'></div>
                                <div className='section-text'>Cơ xương khớp 4</div>
                            </div>
                            <div className='section-group-content'>
                                <div className='section-img medical-facility'></div>
                                <div className='section-text'>Cơ xương khớp 5</div>
                            </div>
                            <div className='section-group-content'>
                                <div className='section-img medical-facility'></div>
                                <div className='section-text'>Cơ xương khớp 6</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
