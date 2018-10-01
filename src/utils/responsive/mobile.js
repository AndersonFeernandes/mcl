// Core
import React from "react";

// Dependencies
import MediaQuery from "react-responsive";

class Mobile extends React.Component {

    // Render
    render() {
        const { children } = this.props;

        return (
            <MediaQuery query="(max-width: 900px)">
                {children}
            </MediaQuery>
        );
    }
}

export default Mobile;