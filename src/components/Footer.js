import React, { Component } from "react";

class Footer extends Component {
    constructor () {
        super();
    }
    
    render () {
        return (
            <div className="container-fluid">
                <h5 className="text-center">Data by: <a href="https://aladhan.com" target="_blank">Aladhan.com</a> for <span className='text-info'>{this.props.user_timezone}</span></h5>
            </div>
        );
    }
}

export default Footer;