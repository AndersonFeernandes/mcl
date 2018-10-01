// Core
import React from "react";

// Dependencies
import MediaQuery from "react-responsive";

class Desktop extends React.Component {

    // Render
    render() {
        const { children } = this.props;

        return (
            <MediaQuery query="(min-device-width: 1224px)">
                {children}
            </MediaQuery>
        );
    }
}

export default Desktop;