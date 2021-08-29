import React, { Component } from 'react'

import Header from "parts/Header";
import landingPage from "json/landingPage.json";
import Hero from "parts/Hero";

export default class LandingPages extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <Header {...this.props}></Header>
                <Hero data={landingPage.hero} />
            </div>
        )
    }
}
