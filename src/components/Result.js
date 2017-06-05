import React, { Component } from "react";
import moment from "moment-timezone";

class Result extends Component {
    constructor () {
        super();
        let user_timezone = this.getUserTimeZone();
        let timezones = moment.tz.names();
        this.state = {
            user_timezone,
            timezones
        };
    }
    
    getUserTimeZone () {
        return moment.tz.guess();
    }
    
    render () {
        return (
            <div className="container-fluid">
                <div>{this.props.today}</div>
                <div>{moment.unix(this.props.today).format('LL')}</div>
                <div>{this.props.tomorrow}</div>
                <div>{moment.unix(this.props.tomorrow).format('LL')}</div>
            </div>
        );
    }
}

export default Result;