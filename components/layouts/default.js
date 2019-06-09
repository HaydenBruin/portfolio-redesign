import React, { Component } from 'react'

// COMPONENTS
import Header from '../../components/header'
import Footer from '../../components/footer'

// STYLESHEETS
import "../../scss/_build.scss";

class Layout extends Component {
    render() {
        return (
            <div className="full-container">
                <Header />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}

export default Layout