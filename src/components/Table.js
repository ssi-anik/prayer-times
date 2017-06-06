import React, { Component } from 'react';
import moment from 'moment';

class Table extends Component {
    timeFormatter(time){
        return moment(time, 'hh:mm A').format('hh:mm A');
    }
    render () {
        let timings = this.props.timings;
        
        return (
            <table className="table table-bordered">
                <caption>{this.props.caption}</caption>
                <tbody>
                {
                    Object.keys(this.props.timings).map(key => {
                        return <tr key={key}><td>{key}</td><td>{this.timeFormatter(timings[key])}</td></tr>;
                    })
                }
                </tbody>
            </table>
        );
    }
}

export default Table;