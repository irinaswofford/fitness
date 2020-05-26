import React, { Component } from 'react';
import hero_shadow from '../images/hero_shadow.jpg'
import ifit_logo from '../images/ifit_logo.png';
import { slide as Menu } from 'react-burger-menu';
import SearchIcon from '@material-ui/icons/Search';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Hero extends Component {
    render() {
        return (
            <div>
                <div className="divHeroHolder">
                    <div className="divTopMenuBar">
                        <div className="divTopMenuBarBlack">
                            <div className="divTopMenuBarBlackContent">
                                <img className="imgIfitLogo" src={ifit_logo} alt="IfitLogo"></img>
                                <ul className="headerMenu">
                                    <li><a href="/login">LOGIN </a></li>
                                    <li><a href="/sign up">SIGN UP </a></li>
                                    <li><a href="/menu">MENU </a> </li>
                                    <li>
                                        <Menu right>
                                            <a id="home" className="menu-item" href="/">Home</a>
                                            <a id="about" className="menu-item" href="/about">About us</a>
                                            <a id="contact" className="menu-item" href="/contact">Contact us</a>
                                        </Menu>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="divTopMenuBarWhite">
                            <div className="divWhiteMenuBarContent">
                                <span className="hideHeaderMobile">Weight Loss</span>
                                <ul className="headerMenuWhite">
                                    <li><a href="/login">OVERVIEW </a></li>
                                    <li><a href="/sign up">FEATURES </a></li>
                                    <li><a href="/menu">PROGRAMS </a> </li>
                                    <li><a href="/menu">TRAINING </a> </li>
                                    <li><SearchIcon style={{ position: "absolute", top: -3 }} /></li>
                                </ul>
                            </div>
                        </div>
                    </div>



                    <img src={hero_shadow} alt="Hero" className="imgHero" />

                    <TransitionGroup className="divHeroBlurbHolder">
                        <div className="divHeroBlurb">
                            <CSSTransition
                                key={1}
                                in={true}
                                appear={true}
                                timeout={1010}
                                classNames="slideFromTop">
                                <div className="ignoreTextShadow">WORKING OUT</div>
                            </CSSTransition>
                            <CSSTransition
                                key={2}
                                in={true}
                                appear={true}
                                timeout={1010}
                                classNames="slideFromRight">
                                <div className="textShadow">HAS NEVER BEEN SO FUN</div>
                            </CSSTransition>
                        </div>
                        <CSSTransition
                            key={3}
                            in={true}
                            appear={true}
                            timeout={2000}
                            classNames="fade">

                            <div className="divHeroBlurbSubText ignoreTextShadow">
                                Welcome to the center of it all. The Fitness Shop presents you with hundreds of workout programs designed to guide your weight loss journey.
                        </div>
                        </CSSTransition>
                    </TransitionGroup>


                </div>
            </div>
        )
    }
}

export default Hero