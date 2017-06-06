import React, { Component } from "react";

class Footer extends Component {
    constructor () {
        super();
    }
    
    render () {
        return (
            <div className="container-fluid">
                <h5 className="text-center text-success">
                    Timezone => {this.props.user_timezone} / API support: <a href="https://aladhan.com" target="_blank">Aladhan.com</a>
                </h5>
            </div>
        );
    }
}

export default Footer;