import React, { Component } from 'react';
import { connect } from 'react-redux';

class Media extends Component {
    
    render() {

        return (
            <div className='section-container odd'>
                <div className='media-container'>
                    <div className='media-left'>
                        <h2>Truyền thông nói về BookingCare</h2>
                        <iframe
                            target="_blank"
                            width="100%" 
                            height="320" 
                            src="https://www.youtube.com/embed/FyDQljKtWnI" 
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        ></iframe>
                    </div>
                    <div className='media-right'>
                        <p>Sau khi hạ Bình Dương và Đà Nẵng, HAGL chỉ cần kiếm thêm một điểm. Do vắng bảy tuyển thủ quốc gia, HLV Kiatisuk Senamuang tiếp tục sử dụng các cầu thủ trẻ bên cạnh những đàn anh như Tuấn Linh, Hữu Tuấn và hai ngoại binh Brandao - Mauricio. Trái lại, Bình Định phải thắng hai bàn cách biệt. Vì vậy, ngay từ đầu, HLV Nguyễn Đức Thắng đã tung vào sân đội hình mạnh, gồm Tiến Duy, Văn Thuận, Hendrio, Lynch và Rafaelson...</p>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Media);
