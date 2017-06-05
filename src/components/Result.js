import React, { Component } from "react";
import moment from "moment-timezone";

class Result extends Component {
    constructor () {
        super();
    }

    formatToDateFromTimestamp (timestamp) {
        return moment.unix(timestamp).format('LL');
    }

    componentWillReceiveProps (nextProps) {
        console.log(nextProps);
        if ( nextProps.latitude !== -9999 || nextProps.longitude !== -9999 ) {

        }
    }

    render () {
        let today = this.props.today;
        let tomorrow = this.props.tomorrow;
        return (
            <div className = "container-fluid">
                <div>{today}</div>
                <div>{this.formatToDateFromTimestamp(today)}</div>
                <div>{tomorrow}</div>
                <div>{this.formatToDateFromTimestamp(tomorrow)}</div>
            </div>
        );
    }
}

export default Result;