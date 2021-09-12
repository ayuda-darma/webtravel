import React, { Component } from "react";
import Fade from "react-reveal/Fade";


import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import FeaturedImage from "parts/FeaturedImages";
import PageDetailDescription from "parts/PageDetailsDescription";
import BookingForm from "parts/BookingForm";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";

import ItemDetails from "json/itemDetails.json";

export default class DetailsPage extends Component {

    componentDidMount() {
        window.title = "Staycation | Home";
        window.scrollTo(0, 0);
    }

    render() {
        const breadcrumb = [
            { pageTitle: "Home", pageHref: "" },
            { pageTitle: "House Details", pageHref: "" },
        ];

        return (
            <>
                <Header {...this.props}></Header>
                <PageDetailTitle breadcrumb={breadcrumb} data={ItemDetails}></PageDetailTitle>
                <FeaturedImage data={ItemDetails.imageUrls}></FeaturedImage>
                <section className="container">
                    <div className="row">
                        <div className="col-7 pr-5">
                            <Fade bottom>
                                <PageDetailDescription data={ItemDetails} />
                            </Fade>
                        </div>
                        <div className="col-5">
                            <Fade bottom>
                                <BookingForm
                                    itemDetails={ItemDetails}
                                    startBooking={this.props.checkoutBooking}
                                />
                            </Fade>
                        </div>
                    </div>
                </section>
                <Testimony data={ItemDetails.testimonial} />
                <Footer />
            </>
        )
    }
}
