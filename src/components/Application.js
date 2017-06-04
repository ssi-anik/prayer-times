import React, { Component } from "react";
import moment from "moment-timezone";
import Select from "react-select";

class Application extends Component {
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

    componentWillMount () {

    }

    render () {
        var options = this.state.timezones.map((value) => {
            return {
                value: value,
                label: value
            }
        });
        return (
            <div className = "container-fluid">
                <Select
                    name = "form-field-name"
                    value = {this.state.user_timezone}
                    options = {options}
                />
            </div>
        );
    }
}

export default Application;