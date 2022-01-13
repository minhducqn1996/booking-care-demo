import React, { Component } from 'react';
import  * as actions from '../../../store/actions';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../../utils/constant'
import './styles.scss';

class HomeHeader extends Component {

    placeholderChild = () => {
        let value = '';
        if (this.props.language === 'en') {
            value="Invalid username or password!"
        } else {
            value="Tìm chuyên khoa"
        }
        return value;
    }

    setLanguageApp = (data) => {
        this.props.languageDispatchAction(data)
    }

    

    render() {
        const {language} = this.props;

        return (
            <React.Fragment>
                <div className="home-header-container">
                    <div className='home-header-content'>
                        <div className="header-content-left">
                            <i className="fas fa-bars"></i>
                            <div className='logo-header'></div>
                        </div>
                        <div className="header-content-center">
                            <div className='child-content'>
                                <div><b><FormattedMessage id="home-header.specialist" /></b></div>
                                <div className='subs-title'><FormattedMessage id="home-header.find-doctor-specialty" /></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="home-header.health-facilities" /></b></div>
                                <div className='subs-title'><FormattedMessage id="home-header.choose-hospital-clinic" /></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="home-header.doctor" /></b></div>
                                <div className='subs-title'><FormattedMessage id="home-header.choose-good-doctor" /></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="home-header.examination-package" /></b></div>
                                <div className='subs-title'><FormattedMessage id="home-header.general-health-check" /></div>
                            </div>
                        </div>
                        <div className="header-content-right">
                            <div className="support"><i className="fas fa-question-circle"></i><FormattedMessage id="home-header.support" /></div>
                            <div className={language === LANGUAGES.VI ? 'language-vi active' : 'language-vi'}><span onClick={() => {this.setLanguageApp(LANGUAGES.VI)}}>VN</span></div>
                            <div className={language === LANGUAGES.EN ? 'language-en active' : 'language-en'}><span onClick={() => {this.setLanguageApp(LANGUAGES.EN)}}>En</span></div>
                        </div>
                    </div>
                </div>
                <div className='home-header-banner'>
                    <div className='content-up'>
                        <div className='title1'><FormattedMessage id="banner.title1" /></div>
                        <div className='title2'><FormattedMessage id="banner.title2" /></div>
                        <div className='search'>
                            <i className="fas fa-search"></i>
                            <input type="text" placeholder={this.placeholderChild()} />
                        </div>
                    </div>
                    <div className='content-down'>
                        <div className='options'>   
                            <div className='option-child'>
                                <div className='icon-option'>
                                    <i className="far fa-hospital"></i>
                                </div>
                                <div className='option-text'><FormattedMessage id="banner.option1" /></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-option'>
                                    <i className="fas fa-mobile-alt"></i>
                                </div>
                                <div className='option-text'><FormattedMessage id="banner.option2" /></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-option'>
                                    <i className="fas fa-stethoscope"></i>
                                </div>
                                <div className='option-text'><FormattedMessage id="banner.option3" /></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-option'>
                                    <i className="fas fa-vial"></i>
                                </div>
                                <div className='option-text'><FormattedMessage id="banner.option4" /></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-option'>
                                    <i className="fas fa-smile"></i>
                                </div>
                                <div className='option-text'><FormattedMessage id="banner.option5" /></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-option'>
                                    <i className="fas fa-hospital-alt"></i>
                                </div>
                                <div className='option-text'><FormattedMessage id="banner.option6" /></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-option'>
                                    <i className="fas fa-procedures"></i>
                                </div>
                                <div className='option-text'><FormattedMessage id="banner.option7" /></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-option'>
                                    <i className="fas fa-ambulance"></i>
                                </div>
                                <div className='option-text'><FormattedMessage id="banner.option8" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
    // onClick={(languages.VI) => (this.setLanguageApp(languages.VI))}
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        languageDispatchAction : (language) => dispatch(actions.setLanguage(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
