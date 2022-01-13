import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import { LANGUAGES } from '../../utils/constant';
import { FormattedMessage } from 'react-intl';
import { adminMenu } from './menuApp';
import './Header.scss';

class Header extends Component {

    render() {
        const { processLogout, userInfo, language } = this.props;

        const setLanguageApp = (data) => {
            this.props.languageDispatchAction(data)
        }

        return (
            <div className="header-container">
                {/* thanh navigator */}
                <div className="header-tabs-container">
                    <Navigator menus={adminMenu} />
                </div>

                {/* nút logout */}
                <div className='header-languages-logout'>
                    <div className='welcome-login'>
                        <FormattedMessage id="home-header.welcome" />
                        {userInfo && userInfo.firstName ? <span className='first-name-info'>{userInfo.firstName}</span> : {}}
                    </div>
                    <div className='languages'>
                        <span 
                            className={language === LANGUAGES.VI ? 'language-vi active' : 'language-vi' } 
                            onClick={() => {setLanguageApp(LANGUAGES.VI)}}
                        >VN</span>
                        <span 
                            className={language === LANGUAGES.EN ? 'language-en active' : 'language-en' }  
                            onClick={() => {setLanguageApp(LANGUAGES.EN)}}
                        >EN</span>
                    </div>
                    <div className="btn btn-logout" onClick={processLogout}>
                        <i className="fas fa-sign-out-alt"></i>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        userInfo: state.user.userInfo
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
        languageDispatchAction : (language) => dispatch(actions.setLanguage(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
