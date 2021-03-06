import React, { Component } from "react";
import moment from "moment";

class Table extends Component {
    timeFormatter (time) {
        return moment(time, 'hh:mm A').format('hh:mm A');
    }

    render () {
        let timings = this.props.timings;
        if ( timings ) {
            return (
                <table className = "table table-bordered table-responsive">
                    <caption>{this.props.caption}</caption>
                    <tbody>
                    <tr>
                        <td>Epoch & Salat</td>
                        <td>Time</td>
                    </tr>
                    {
                        Object.keys(this.props.timings).map((key, index) => {
                            return <tr key = {key} className = {index % 2 == 0 ? 'warning' : 'success'}>
                                <td>{key}</td>
                                <td>{this.timeFormatter(timings[key])}</td>
                            </tr>;
                        })
                    }
                    </tbody>
                </table>
            );
        } else {
            return (
                <div className = "panel panel-primary">
                    <div className = "panel-body">Loading <span className='text-primary'>{this.props.extra}</span>'s prayer times</div>
                </div>
            );
        }
    }
}

export default Table;