import React, { Component } from "react";
import moment from "moment-timezone";
import Header from "./Header";
import Result from "./Result";

class Application extends Component {
    constructor () {
        super();
        let user_timezone = this.getUserTimeZone();
        this.getUserLatitudeAndLongitude();
        let timezones = moment.tz.names();
        let today = moment().unix();
        let tomorrow = moment().add(1, 'days').unix();
        let latitude = -9999;
        let longitude = -9999;
        this.state = {
            user_timezone,
            timezones,
            today,
            tomorrow,
            latitude,
            longitude
        };
    }

    updatePosition (position) {
        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
    }

    getUserLatitudeAndLongitude () {
        navigator.geolocation.getCurrentPosition((position) => {
            this.updatePosition(position);
        });
    }

    getUserTimeZone () {
        return moment.tz.guess();
    }

    render () {
        return (
            <div className = "container-fluid">
                <Header user_timezone = {this.state.user_timezone} />
                <Result today = {this.state.today}
                        latitude = {this.state.latitude}
                        longitude = {this.state.longitude}
                        tomorrow = {this.state.tomorrow}
                        user_timezone = {this.state.user_timezone} />
            </div>
        );
    }
}

export default Application;