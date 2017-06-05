import React, { Component } from "react";

class Header extends Component {
    render () {
        return (
            <h4 className="text-center text-success">Timezone: {this.props.user_timezone}</h4>
        );
    }
}

export default Header;