import React, { Component } from "react";
import moment from "moment-timezone";
import Header from "./Header";
import Result from "./Result";

class Application extends Component {
    
    constructor () {
        super();
        let user_timezone = this.getUserTimeZone();
        let timezones = moment.tz.names();
        let today = moment().unix();
        let tomorrow = moment().add(1, 'days').unix();
        this.state = {
            user_timezone,
            timezones,
            today,
            tomorrow
        };
    }
    
    getUserTimeZone () {
        return moment.tz.guess();
    }
    
    render () {
        return (
            <div className="container-fluid">
                <Header user_timezone={this.state.user_timezone}/>
                <Result today={this.state.today}
                        tomorrow={this.state.tomorrow}
                        user_timezone={this.state.user_timezone}/>
            </div>
        );
    }
}

export default Application;