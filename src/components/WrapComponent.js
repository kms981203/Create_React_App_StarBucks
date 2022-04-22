import React, { Component } from 'react';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import MainComponent from './MainComponent';
import SkipComponent from './SkipComponent';

class WrapComponent extends Component {
    render() {
        return (
            <div id='wrap'>
                <SkipComponent/>
                <HeaderComponent/>
                <MainComponent/>
                <FooterComponent/>
            </div>
        );
    }
}

export default WrapComponent;