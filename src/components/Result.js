import React, { Component } from "react";
import moment from "moment-timezone";
import Table from './Table';

class Result extends Component {
    constructor () {
        super();
    }
    
    formatToDateFromTimestamp (timestamp) {
        return moment.unix(timestamp).format('LL');
    }
    
    render () {
        let today = this.props.today;
        let tomorrow = this.props.tomorrow;
        let timingsToday = this.props.timingsToday;
        let timingsTomorrow = this.props.timingsTomorrow;
        
        return (
            <div className="container-fluid">
                <div className="col-md-6">
                    <Table timings={timingsToday}
                           caption={`Today - ${this.formatToDateFromTimestamp(today)}'s prayer timings`} extra={this.formatToDateFromTimestamp(today)}/>
                </div>
                
                <div className="col-md-6">
                    <Table timings={timingsTomorrow}
                           caption={`Tomorrow - ${this.formatToDateFromTimestamp(tomorrow)}'s prayer timings`} extra={this.formatToDateFromTimestamp(tomorrow)}/>
                </div>
            </div>
        );
    }
}

export default Result;