import React, { Component } from "react";

import Header from "parts/Header";
import landingPage from "json/landingPage.json";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";

export default class LandingPages extends Component {

    constructor(props) {
        super(props);
        this.refMostPicked = React.createRef();
    }

    componentDidMount() {
        window.title = "Relacation | Home";
        window.scrollTo(0, 0);
    }

    // componentDidMount() {
    //     document.title = "Relacation | Home";
    //     window.scrollTo(0, 0);

    //     if (!this.props.page.landingPage)
    //         this.props.fetchPage(`/landing-page`, "landingPage");
    // }

    render() {
        console.log(this.props);
        return (
            <div>
                <Header {...this.props}></Header>
                <Hero refMostPicked={this.refMostPicked} data={landingPage.hero} />
                <MostPicked
                    refMostPicked={this.refMostPicked}
                    data={landingPage.mostPicked}
                />
                <Categories data={landingPage.categories} />
                <Testimony data={landingPage.testimonial} />
                <Footer />
            </div>
        )
    }
}
