import React, { Component } from "react";

class Footer extends Component {
    constructor () {
        super();
    }
    
    render () {
        return (
            <h5 className="text-info text-center">
                <hr/>
                API support: <a href="https://aladhan.com" target="_blank">Aladhan.com</a>
                <hr/>
            </h5>
        );
    }
}

export default Footer;