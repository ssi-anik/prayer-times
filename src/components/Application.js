import React, { Component } from "react";
import moment from "moment-timezone";
import Header from "./Header";
import Result from "./Result";
import Footer from "./Footer";
import axios from "axios";

class Application extends Component {
    constructor () {
        super();
        let user_timezone = this.getUserTimeZone();
        // let timezones = this.getTimezonesList();
        let today = moment().unix();
        let tomorrow = moment().add(1, 'days').unix();
        let latitude = -9999;
        let longitude = -9999;
        this.state = {
            user_timezone,
            // timezones,
            today,
            tomorrow,
            latitude,
            longitude,
            timingsToday: '',
            timingsTomorrow: ''
        };
        this.getUserLatitudeAndLongitude();
    }

    urlBuilder(time, latitude, longitude, timezone){
        return `http://api.aladhan.com/timings/${time}?latitude=${latitude}&longitude=${longitude}&timezonestring=${timezone}&method=2`
    }

    updatePosition (position) {
        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        });
        // position found
        // get today's timings
        axios.get(this.urlBuilder(this.state.today, this.state.latitude, this.state.longitude, this.state.user_timezone))
             .then((response) => {
                 this.updateTimingState('today', response);
             }).catch((error) => {

        });
        // get tomorrow's timings
        axios.get(this.urlBuilder(this.state.tomorrow, this.state.latitude, this.state.longitude, this.state.user_timezone))
             .then((response) => {
                 this.updateTimingState('tomorrow', response);
             }).catch((error) => {

        });
    }

    updateTimingState (when, timings) {
        console.log(timings.data);
        switch ( when ) {
            case 'today':
                this.setState({
                    timingsToday: timings.data.data.timings
                });
                break;
            case 'tomorrow':
                this.setState({
                    timingsTomorrow: timings.data.data.timings
                });
                break;
        }
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
                <Result tomorrow = {this.state.tomorrow}
                        timingsTomorrow = {this.state.timingsTomorrow}
                        timingsToday = {this.state.timingsToday}
                        today = {this.state.today} />
                <Footer user_timezone = {this.state.user_timezone} />
            </div>
        );
    }
}

export default Application;