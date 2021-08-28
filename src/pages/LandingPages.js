import React, { Component } from 'react'

import Header from "parts/Header";

export default class LandingPages extends Component {
    render() {
        return (
            <div>
                <Header {...this.props}></Header>
            </div>
        )
    }
}
